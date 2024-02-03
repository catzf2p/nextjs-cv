export const AgeCalculator = (fromDate: Date): number => {
  const now = new Date();
  const birth = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
  const diff = new Date(now.valueOf() - birth.valueOf());
  return Math.abs(diff.getFullYear() - 1970);
};
