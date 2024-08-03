"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface SeriesListProps {
  series: any;
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getLastFiveItems = (array: any) => {
    if (!Array.isArray(array)) {
      throw new TypeError("The provided argument is not an array.");
    }

    // Return the last 5 items, or all items if the array has fewer than 5 elements.
    return array.slice(-5);
  };

  const lastFiveSeries = getLastFiveItems(series);
  return (
    <div className="series-list">
      <h3>Previous Series</h3>
      <motion.div
        className="series-container"
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        viewport={{ amount: 0.1 }}
      >
        {lastFiveSeries.map(
          (
            item: { seriesImage: string; route: string; title: string },
            index: number
          ) => {
            const imageUrl = urlForImage(item.seriesImage)
              ?.height(1000)
              .width(2000)
              .url();

            return (
              <motion.a
                href={`/watch-online/previous-sermons/${item.route}`}
                key={index}
                variants={items}
                viewport={{ amount: 0.1 }}
              >
                <Image
                  src={imageUrl as string}
                  height={300}
                  width={300}
                  alt={`${item.title} - Love First`}
                />

                <p>{item.title}</p>
              </motion.a>
            );
          }
        )}
      </motion.div>
      <div className="moreSermonsCtaContainer">
        <Link className="moreSermonsCta" href="/watch-online/previous-sermons">
          View all Series
        </Link>
      </div>
    </div>
  );
};

export default SeriesList;
