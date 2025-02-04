// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import BigGiveYoutubeVideo from "./BigGiveYoutube";
import type { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { bigGive } from "@/sanity/lib/queries";
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
      url: "https://www.lfcc.tv/biggive",
    },
    alternates: {
      canonical: `https://www.lfcc.tv/biggive`,
    },
  };
}

const BigGivePage = async () => {
  const data: any = await sanityFetch({ query: bigGive });

  return (
    <>
      <div className="big-give-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{data?.title}</h1>
              <BigGiveYoutubeVideo youtubeVideo={data?.youtubeVideo} />
              <p className="hero-description">{data?.subtitle}</p>
              <Link
                href={data?.redirectUrl}
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
        <ProgressBar percentFinished={data?.percentFinished} />

        {/* Impact Stories Section */}
        <section className="impact-stories-section">
          <h2>{data?.impactHeadline}</h2>
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
              <h3>{data?.impactContentHeadlineOne}</h3>
              <p>{data?.impactContentTextOne}</p>
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
              <h3>{data?.impactContentHeadlineTwo}</h3>
              <p>{data?.impactContentTextTwo}</p>
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
              <h3>{data?.impactContentHeadlineThree}</h3>
              <p>{data?.impactContentTextThree}</p>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="event-details-section">
          <h2>{data?.bigGiveSection}</h2>
          <p>
            Mark your calendars! Our Big Give event is happening on{" "}
            <strong>{data?.bigGiveSectionDate}</strong>, at Love First.
          </p>
          <p>{data?.bigGiveSectionBibleVerse}</p>
        </section>

        {/* Donation CTA Section */}
        <section id="donate-section" className="donate-section">
          <h2>Ready to Make an Impact?</h2>
          <Link
            href={data?.redirectUrl}
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
