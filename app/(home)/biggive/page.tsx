// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import BigGiveYoutubeVideo from "./BigGiveYoutube";
import type { Metadata, ResolvingMetadata } from "next";
import "./big-give.css";

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
    title: "Big Give Sunday - Love First Christian Center",
    description:
      "Join us in the Big Give event to raise the final $1 million for our community's vision. Help make an impact with your generosity!",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/big-give",
    },
  };
}

const BigGivePage = () => {
  // Example progress state

  return (
    <>
      <div className="big-give-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Big Give Sunday</h1>
              <BigGiveYoutubeVideo />
              <p className="hero-description">
                Help us to complete our vision. Your generosity can change
                lives!
              </p>
              <Link
                href="https://lovefirst.churchcenter.com/giving/to/big-give-building-fund"
                className="cta-button"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Big Give Sunday For New Building"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </section>
        <ProgressBar />

        {/* Impact Stories Section */}
        <section className="impact-stories-section">
          <h2>How Your Donation Will Build Our Future</h2>
          <div className="impact-stories-grid">
            <div className="impact-story">
              <div className="impact-story-image-container">
                <Image
                  src="/NewSanctuary.webp"
                  alt="New Church Vision"
                  width={600}
                  height={400}
                />
              </div>
              <h3>A Place to Worship and Grow</h3>
              <p>
                Your generosity will help us build a new sanctuary that provides
                a welcoming space for our congregation to worship, grow, and
                serve the people of God.
              </p>
            </div>
            <div className="impact-story">
              <div className="impact-story-image-container">
                <Image
                  src="/CommunityOutreach.webp"
                  alt="Community Center"
                  width={600}
                  height={400}
                />
              </div>
              <h3>Expanding Our Community Outreach</h3>
              <p>
                The new church building will allow us to host events, offer
                support services, and serve as a hub for outreach to families in
                need, providing valuable resources and care to our community.
              </p>
            </div>
            <div className="impact-story">
              <div className="impact-story-image-container">
                <Image
                  src="/ChildrenSpaces.webp"
                  alt="Youth and Children's Space"
                  width={600}
                  height={400}
                />
              </div>
              <h3>Dedicated Youth and Children&apos;s Spaces</h3>
              <p>
                With your support, we will create modern, dedicated spaces for
                our youth and children&apos;s ministries, allowing them to
                engage in programs that nurture their spiritual development.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="event-details-section">
          <h2>BIG GIVE</h2>
          <p>
            Mark your calendars! Our Big Give event is happening on{" "}
            <strong>March 16th, 2025</strong>, at Love First.
          </p>
          <p>
            “But who am I, and what is my people, that we should be able thus to
            offer willingly? For all things come from you, and of your own have
            we given you.“ 1 Chronicles 29:14.
          </p>
        </section>

        {/* Donation CTA Section */}
        <section id="donate-section" className="donate-section">
          <h2>Ready to Make an Impact?</h2>
          <Link
            href="https://lovefirst.churchcenter.com/giving/to/big-give-building-fund"
            className="cta-bottom-button"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Big Give Sunday For New Building"
          >
            Donate Now
          </Link>
        </section>
      </div>
    </>
  );
};

export default BigGivePage;
