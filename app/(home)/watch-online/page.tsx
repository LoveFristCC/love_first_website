import Image from "next/image";
import Link from "next/link";
import SermonSection from "@/components/sermons/SermonSection";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Services - Love First Christian Center",
    description:
      "Join Love First Christian Center from anywhere! Stream live every Sunday and Wednesday or watch past sermons on-demand. Engage in uplifting worship online.",
  };
}

const WatchOnline = () => {
  return (
    <div className="watch-online">
      <section className="watch-online-hero">
        <Image
          src="/onlineBackground.webp"
          alt="Watch Online Background"
          layout="fill"
          objectFit="cover"
          className="watch-online-background-image"
          priority
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
            >
              Watch Live
            </Link>
            <Link
              href="https://www.youtube.com/@LovefirstChristianCenter/streams"
              className="watch-online-button"
              rel="noopener noreferrer"
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
