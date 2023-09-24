export function getYearFromDate(dateString: string | null) {
  if (!dateString) {
    return 'Unknown';
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Unknown';
  }

  return date.getFullYear();
}
