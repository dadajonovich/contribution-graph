export function getNextSunday(): number {
  const today = new Date();
  const dayOfWeek = today.getDay();
  let daysUntilSunday = 0;

  if (dayOfWeek !== 0) {
    daysUntilSunday = 7 - dayOfWeek;
  }

  const nextSunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + daysUntilSunday
  );

  return Number(nextSunday);
}
