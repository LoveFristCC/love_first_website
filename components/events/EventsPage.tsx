import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import DateComponent from "@/app/(home)/date";
import TimeComponent from "@/app/(home)/time";

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
        const date = new Date(el.attributes.starts_at).toDateString();
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
        <h6 className="eventsHeadline">Upcoming Events at Love First</h6>
        {Object.keys(groupedEvents).map((date, index) => {
          if (groupedEvents[date].length > 0)
            return (
              <div key={index} className="dateGroup">
                <h6 className="dateHeader">{date}</h6>
                {groupedEvents[date].map(
                  (
                    el: {
                      relationships: { event: { data: { id: number } } };
                      attributes: {
                        location: string;
                        starts_at: string;
                        ends_at: string;
                      };
                    },
                    i: number
                  ) => {
                    const headline = eventData.find(
                      (element: { id: number }) =>
                        element.id === el.relationships.event.data.id
                    );

                    if (headline) {
                      return (
                        <div className="eventContainer" key={i}>
                          <p className="eventHeader">
                            {headline.attributes.name}
                          </p>
                          <p>{el.attributes.location}</p>
                          <TimeComponent
                            startTime={el.attributes.starts_at}
                            endTime={el.attributes.ends_at}
                            // className="timeComponent"
                          />
                          <DateComponent
                            dateString={el.attributes.starts_at}
                            // className="dateComponent"
                          />
                        </div>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default EventsPage;
