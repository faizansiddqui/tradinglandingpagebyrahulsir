export function getNextWebinarDate() {
  const now = new Date();

  const SUNDAY = 0;
  const WEDNESDAY = 3;

  const webinarHour = 12; // 12 PM
  const webinarMinute = 0;

  function getNextDay(targetDay) {
    const result = new Date(now);
    const dayDiff = (targetDay - now.getDay() + 7) % 7;
    result.setDate(now.getDate() + (dayDiff === 0 ? 7 : dayDiff));
    result.setHours(webinarHour, webinarMinute, 0, 0);
    return result;
  }

  const nextSunday = getNextDay(SUNDAY);
  const nextWednesday = getNextDay(WEDNESDAY);

  // Pick nearest webinar
  return nextSunday < nextWednesday ? nextSunday : nextWednesday;
}
