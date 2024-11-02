import { getPcData } from "@/app/lib/getPcData";
import EventsClient from "./EventsClient";
import { DateTime } from "luxon";

const EventsPage = async () => {
  const response = await getPcData(
    "https://api.planningcenteronline.com/calendar/v2/event_instances?filter=future&order=starts_at&per_page=20"
  );
  const events = await getPcData(
    `https://api.planningcenteronline.com/calendar/v2/events?where[visible_in_church_center]=true&filter=future`
  );
  const eventData = events.data;

  // Function to group events by date
  const groupEventsByDate = (events: any) => {
    return events.reduce(
      (acc: any, el: { attributes: { starts_at: string } }) => {
        // Convert the date to EST and format as a date string using Luxon
        const date = DateTime.fromISO(el.attributes.starts_at, { zone: "utc" })
          .setZone("America/New_York")
          .toLocaleString(DateTime.DATE_SHORT);

        if (!acc[date]) acc[date] = [];
        acc[date].push(el);
        return acc;
      },
      {}
    );
  };

  // Group events by date
  const groupedEvents = groupEventsByDate(response.data);

  return (
    <section className="eventsSection">
      <div className="eventsContent">
        <h2 className="eventsHeadline">Upcoming Events at Love First</h2>

        {groupedEvents && (
          <EventsClient eventData={eventData} groupedEvents={groupedEvents} />
        )}
      </div>
    </section>
  );
};

export default EventsPage;
