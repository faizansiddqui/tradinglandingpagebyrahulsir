// src/app/lib/webinar.js
export function getNextWebinarDate() {
  const now = new Date();

  // 0 = Sunday, 3 = Wednesday
  const SUNDAY = 0;
  const WEDNESDAY = 3;

  const webinarHour = 12; // ✅ 3 PM (aap change kar sakte ho)
  const webinarMinute = 0;

  function getNextDay(targetDay) {
    const result = new Date(now);
    const dayDiff = (targetDay - now.getDay() + 7) % 7;
    const addDays = dayDiff === 0 ? 7 : dayDiff;
    result.setDate(now.getDate() + addDays);
    result.setHours(webinarHour, webinarMinute, 0, 0);
    return result;
  }

  const nextSunday = getNextDay(SUNDAY);
  const nextWednesday = getNextDay(WEDNESDAY);

  return nextSunday < nextWednesday ? nextSunday : nextWednesday;
}
