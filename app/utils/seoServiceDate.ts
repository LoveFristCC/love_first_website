import { DateTime } from "luxon";

// Utility function to get next occurrence of a service
const getNextServiceDate = (dayOfWeek: any, timeString: any) => {
  // Get the current time in America/New_York timezone
  const now = DateTime.now().setZone("America/New_York");

  // Extract hours and minutes from timeString
  const [hours, minutes] = timeString.split(":").map(Number);

  // Calculate the next occurrence of the specified weekday
  let result = now.set({
    hour: hours,
    minute: minutes,
    second: 0,
    millisecond: 0,
  });
  while (result.weekday !== dayOfWeek) {
    result = result.plus({ days: 1 });
  }

  // If the time for today has already passed, move to next week's occurrence
  if (result < now) {
    result = result.plus({ days: 7 });
  }

  return result.toISO(); // Returns ISO string with correct timezone offset
};

// Generate service dates with automatic DST handling
export const nextSundayMorning = getNextServiceDate(7, "07:45"); // Sunday (Luxon uses 1-7 for Mon-Sun)
export const nextSundayLateMorning = getNextServiceDate(7, "09:45");
export const nextSundayAfternoon = getNextServiceDate(7, "11:45");
export const nextWednesday = getNextServiceDate(3, "19:00"); // Wednesday
