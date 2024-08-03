import dynamic from "next/dynamic";
import { sanityFetch } from "@/sanity/lib/fetch";
import { seriesQuery } from "@/sanity/lib/queries";
import type { SeriesQueryResult } from "@/sanity.types";
import Link from "next/link";

const SeriesList = dynamic(() => import("./SeriesList"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const FeaturedVideo = dynamic(() => import("./FeaturedVideo"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const SermonSection = async ({ path }: { path: string }) => {
  const mainData = await sanityFetch<SeriesQueryResult>({
    query: seriesQuery,
    stega: false,
  });

  if (!mainData || mainData.length === 0) return null;

  const { featuredVideo, series } = mainData[0];

  return (
    <section className="sermon-section">
      {path === "home" ? (
        <>
          <h2>Missed The Last Sermon?</h2>
          <p>Don&apos;t worry! Catch up on all our messages now.</p>
        </>
      ) : (
        <>
          <h2>Latest Sermon</h2>
          <p>Catch up on the most recent sermon from our latest service.</p>
        </>
      )}

      <FeaturedVideo featuredVideo={featuredVideo} />
      {path === "home" && <SeriesList series={series} />}
    </section>
  );
};

export default SermonSection;
