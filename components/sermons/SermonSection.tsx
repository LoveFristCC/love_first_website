import { sanityFetch } from "@/sanity/lib/fetch";
import { seriesQuery } from "@/sanity/lib/queries";
import type { SeriesQueryResult } from "@/sanity.types";
import Link from "next/link";
import SeriesList from "./SeriesList";
import FeaturedVideo from "./FeaturedVideo";

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
