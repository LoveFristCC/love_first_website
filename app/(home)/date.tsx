import { DateTime } from "luxon";

export default function DateComponent({ dateString }: { dateString: string }) {
  const formattedDate = DateTime.fromISO(dateString, {
    zone: "America/New_York",
  }).toFormat("LLLL d, yyyy");
  return (
    <time
      dateTime={dateString}
      className="dateComponent"
      suppressHydrationWarning
    >
      {formattedDate}
    </time>
  );
}
