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
          <h2>Watch Our Latest Featured Sermon Online</h2>
          <p>
            Catch this powerful sermon and gain insights to uplift your faith
            and spirit. Available to watch anytime.
          </p>
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
