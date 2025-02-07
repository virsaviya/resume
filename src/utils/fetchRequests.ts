import { Experience_t } from 'types';

const DELIMITER = ' | ';
const EXPECTED_HEADERS: Array<keyof Experience_t> = [
  'type',
  'id',
  'expOrder',
  'histOrder',
  'organization',
  'position',
  'location',
  'startDate',
  'endDate',
  'stack',
  'description',
];

export const fetchData = async (): Promise<FetchResponse_t> => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const sheetId = process.env.REACT_APP_SHEET_ID;
  const range = process.env.REACT_APP_DATA_RANGE;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/data!${range}?key=${apiKey}&valueRenderOption=UNFORMATTED_VALUE`;

  try {
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error(`FETCHING DATA FAILED! Status: ${resp.status}`);
    return resp.json();
  } catch (e) {
    throw new Error(`FETCHING DATA FAILED! Status: ${e}`);
  }
};

export const parseSheetData = (data: FetchResponse_t): Array<Experience_t> => {
  const [fetchedHeaders, ...rows] = data.values;
  const map = makeHeaderToIdxMap(fetchedHeaders);

  return rows.map((currRow) => {
    const endDate = currRow[map.endDate || -1];
    const stack = currRow[map.stack || -1];
    const description = currRow[map.description || -1];

    return {
      type: currRow[map.type],
      id: currRow[map.id],
      expOrder: parseInt(currRow[map.expOrder]),
      histOrder: parseInt(currRow[map.histOrder]),
      organization: currRow[map.organization],
      position: currRow[map.position],
      location: currRow[map.location],
      startDate: convertGoogleDate(parseInt(currRow[map.startDate])),
      endDate:
        typeof endDate === 'number' ? convertGoogleDate(endDate) : undefined,
      stack: stack?.length > 0 ? stack.split(',') : undefined,
      description:
        description?.length > 0 ? description.split(DELIMITER) : undefined,
    } as Experience_t;
  });
};

type HeaderToIdxMap_t = { [K in keyof Experience_t]: number };

interface FetchResponse_t {
  range: string;
  majorDimension: 'ROWS' | 'COLUMNS';
  values: Array<string[]>;
}

const makeHeaderToIdxMap = (fetchedHeaders: Array<string>): HeaderToIdxMap_t =>
  EXPECTED_HEADERS.reduce(
    (map, curr) => ({ ...map, [curr]: fetchedHeaders.indexOf(curr) }),
    {} as HeaderToIdxMap_t,
  );

const convertGoogleDate = (date: number): Date => {
  const epoch = new Date(1899, 11, 30); // Google Sheets base date
  return new Date(epoch.getTime() + date * 86400000);
};
