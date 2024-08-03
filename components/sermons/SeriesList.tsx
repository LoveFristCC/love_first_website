"use client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

interface SeriesListProps {
  series: any;
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
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
      <div className="series-container">
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
              <Link
                href={`/watch-online/previous-sermons/${item.route}`}
                key={index}
              >
                <Image
                  src={imageUrl as string}
                  height={300}
                  width={300}
                  alt={`${item.title} - Love First`}
                />

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
