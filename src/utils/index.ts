export { fetchData, parseSheetData } from './fetchRequests';

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const dateToRender = (
  startDate: Date,
  endDate: Date | undefined,
): string => {
  if (endDate === undefined)
    return startDate.toLocaleDateString('en-US', { year: 'numeric' });
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  if (startYear === endYear) return startYear.toString();
  return `${startYear} - ${endYear}`;
};
