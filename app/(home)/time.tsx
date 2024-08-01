import { format } from "date-fns";

export default function TimeComponent({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) {
  // Formatted times using date-fns
  const formattedStartTime = format(new Date(startTime), "h:mm a");
  const formattedEndTime = format(new Date(endTime), "h:mm a");

  return (
    <time
      dateTime={`${startTime} - ${endTime}`}
      className="timeComponent"
      suppressHydrationWarning
    >
      {formattedStartTime} - {formattedEndTime}
    </time>
  );
}
