export const parseDate = (date: Date) =>
  date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
