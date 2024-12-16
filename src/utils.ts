export const parseDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
