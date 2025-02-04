import Image from "next/image";
import Link from "next/link";
import SermonSection from "@/components/sermons/SermonSection";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  const siteName = "Love First Christian Center";
  return {
    title: "Church Online - Love First Christian Center",
    description:
      "Join Love First Christian Center from anywhere! Stream church online live every Sunday and Wednesday or watch past sermons on-demand.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/watch-online",
    },
    alternates: {
      canonical: "https://www.lfcc.tv/watch-online",
    },
  };
}

const WatchOnline = () => {
  return (
    <div className="watch-online">
      <section className="watch-online-hero">
        <Image
          src="/onlineBackground.webp"
          alt="Watch Online Background"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
          className="watch-online-background-image"
        />
        <div className="watch-online-hero-content">
          <h1 className="watch-online-title">Watch Our Services Online</h1>
          <p className="watch-online-description">
            Join us from anywhere in the world! Our live streams and on-demand
            services are available for you to watch and participate in our
            worship experience.
          </p>
          <div className="watch-online-buttons">
            <Link
              href="https://lovefirstcc.online.church/"
              className="watch-online-button"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Watch Love First Online"
            >
              Watch Live
            </Link>
            <Link
              href="https://www.youtube.com/@LovefirstChristianCenter/streams"
              className="watch-online-button"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Watch Love First Online on Youtube"
            >
              Watch Live on YouTube
            </Link>
          </div>
        </div>
      </section>
      <section className="watch-online-info">
        <div className="watch-online-info-block">
          <h2 className="watch-online-info-title">Live Stream Schedule</h2>
          <p className="watch-online-info-content">
            Our live services are streamed every Sunday at 7:45 AM, 9:45 AM,
            11:45 AM and Wednesday at 7 PM. Don&apos;t miss out on our engaging
            and uplifting services.
          </p>
        </div>
      </section>

      <SermonSection path="online" />

      <section className="on-demand-services">
        <div className="on-demand-content">
          <h2 className="on-demand-title">On-Demand Services</h2>
          <p className="on-demand-description">
            Catch up on past services or re-watch your favorite messages
            anytime. Our on-demand library is available 24/7.
          </p>
          <Link
            href="/watch-online/previous-sermons"
            className="on-demand-button"
          >
            Previous Sermons
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WatchOnline;
