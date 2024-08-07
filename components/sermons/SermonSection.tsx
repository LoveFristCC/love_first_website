import { sanityFetch } from "@/sanity/lib/fetch";
import { youtubeSeries } from "@/sanity/lib/queries";
import SeriesList from "./SeriesList";
import FeaturedVideo from "./FeaturedVideo";

const SermonSection = async ({ path }: { path: string }) => {
  const mainData = await sanityFetch<any>({
    query: youtubeSeries,
    stega: false,
  });

  if (!mainData || mainData.length === 0) return null;

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

      <FeaturedVideo featuredVideo={mainData[0]} />
      {path === "home" && <SeriesList series={mainData} />}
    </section>
  );
};

export default SermonSection;
