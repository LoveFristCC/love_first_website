"use client";
import { useRef } from "react";
import Link from "next/link";
import DateComponent from "@/app/(home)/date";
import TimeComponent from "@/app/(home)/time";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const EventsClient = ({
  groupedEvents,
  eventData,
}: {
  groupedEvents: any;
  eventData: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {Object.keys(groupedEvents).map((date, index) => {
        if (groupedEvents[date].length > 0)
          return (
            <motion.div
              key={index}
              className="dateGroup"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
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
                      <Link
                        href={`/events/${headline.id}`}
                        className="eventContainer"
                        key={i}
                      >
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
                      </Link>
                    );
                  }
                  return null;
                }
              )}
            </motion.div>
          );
      })}
    </>
  );
};

export default EventsClient;
