"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface SeriesListProps {
  series: any;
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % series.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [series.length]);

  return (
    <div className="series-list">
      <h6>Previous Series</h6>
      <div className="series-container">
        {series.map(
          (
            item: { seriesImage: string; route: string; title: string },
            index: number
          ) => {
            const imageUrl = urlForImage(item.seriesImage)
              ?.height(1000)
              .width(2000)
              .url();

            return (
              <Link
                href={`/watch-online/previous-sermons/${item.route}`}
                key={index}
              >
                <div>
                  <Image
                    src={imageUrl as string}
                    height={300}
                    width={300}
                    alt={`${item.title} - Love First`}
                  />
                </div>
                <p>{item.title}</p>
              </Link>
            );
          }
        )}
      </div>
      <div className="moreSermonsCtaContainer">
        <Link className="moreSermonsCta" href="/watch-online/previous-sermons">
          View all Series
        </Link>
      </div>
    </div>
  );
};

export default SeriesList;
