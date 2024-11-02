import { DateTime } from "luxon";

export default function TimeComponent({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) {
  // Formatted times using date-fns
  const formattedStartTime = DateTime.fromISO(startTime, {
    zone: "America/New_York",
  }).toFormat("h:mm a");
  const formattedEndTime = DateTime.fromISO(endTime, {
    zone: "America/New_York",
  }).toFormat("h:mm a");

  return (
    <time
      dateTime={`${startTime} - ${endTime}`}
      className="timeComponent"
      suppressHydrationWarning
    >
      {formattedStartTime} - {formattedEndTime} EST
    </time>
  );
}
