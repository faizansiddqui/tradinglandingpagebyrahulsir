// src/app/lib/webinar.js
export function getNextWebinarDate() {
  const now = new Date();

  const SUNDAY = 0;
  const THURSDAY = 4;

  const webinarHour = 12;   // 12:50 PM IST (temporary)
  const webinarMinute = 50;

  function getNextDay(targetDay) {
    const result = new Date(now);
    const dayDiff = (targetDay - now.getDay() + 7) % 7;
    // agar same day hai, to next week
    result.setDate(now.getDate() + (dayDiff === 0 ? 7 : dayDiff));
    result.setHours(webinarHour, webinarMinute, 0, 0);
    return result;
  }

  const nextSunday = getNextDay(SUNDAY);
  const nextThursday = getNextDay(THURSDAY);

  return nextSunday < nextThursday ? nextSunday : nextThursday;
}

export function formatWebinarParts(webinarDT) {
  const webinarDay = webinarDT.toLocaleDateString("en-IN", { weekday: "long" });

  const webinarDate = webinarDT.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const webinarTime = webinarDT.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { webinarDay, webinarDate, webinarTime };
}
