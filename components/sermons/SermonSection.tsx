import { sanityFetch } from "@/sanity/lib/fetch";
import { seriesQuery } from "@/sanity/lib/queries";
import type { SeriesQueryResult } from "@/sanity.types";
import Link from "next/link";
import SeriesList from "./SeriesList";

type FeaturedVideoProps = {
  featuredVideo: {
    url: string;
    title: string;
    serviceTitle: string;
    speaker: string;
  };
};

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ featuredVideo }) => (
  <div className="sermon-content">
    <div className="video-container">
      <iframe
        src={featuredVideo.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="sermon-details">
      <h3>Sermon Series:</h3>
      <p>{featuredVideo.title}</p>
      <h3>Message Title:</h3>
      <p>{featuredVideo.serviceTitle}</p>
      <h3>Speaker:</h3>
      <p>{featuredVideo.speaker}</p>
    </div>
  </div>
);

const SermonSection = async () => {
  const mainData = await sanityFetch<SeriesQueryResult>({
    query: seriesQuery,
    stega: false,
  });

  if (!mainData || mainData.length === 0) return null;

  const { featuredVideo, series } = mainData[0];

  return (
    <section className="sermon-section">
      <h2>Missed a Sermon?</h2>
      <p>Don&apos;t worry! Catch up on all our messages now.</p>

      <FeaturedVideo featuredVideo={featuredVideo} />
      <SeriesList series={series} />
    </section>
  );
};

export default SermonSection;
