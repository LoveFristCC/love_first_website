"use client";
import Link from "next/link";
import DateComponent from "@/app/(home)/date";
import TimeComponent from "@/app/(home)/time";
import { motion, useInView, Variants } from "framer-motion";

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

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 300,
    rotate: -20,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const EventsClient = ({
  groupedEvents,
  eventData,
}: {
  groupedEvents: any;
  eventData: any;
}) => {
  return (
    <>
      {Object.keys(groupedEvents).map((date, index) => {
        if (groupedEvents[date].length > 0)
          return (
            <motion.div
              key={index}
              className="dateGroup"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <h3 className="dateHeader">{date}</h3>
              {groupedEvents[date].map(
                (
                  el: {
                    relationships: { event: { data: { id: number } } };
                    attributes: {
                      location: string;
                      starts_at: string;
                      ends_at: string;
                      church_center_url: string;
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
                        href={el.attributes.church_center_url}
                        className="eventContainer"
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={headline.attributes.name}
                      >
                        <p className="eventHeader">
                          {headline.attributes.name}
                        </p>
                        <p>{el.attributes.location}</p>
                        <TimeComponent
                          startTime={el.attributes.starts_at}
                          endTime={el.attributes.ends_at}
                        />
                        <DateComponent dateString={el.attributes.starts_at} />
                      </Link>
                    );
                  }
                  return null;
                }
              )}
            </motion.div>
          );
        return null;
      })}
    </>
  );
};

export default EventsClient;
