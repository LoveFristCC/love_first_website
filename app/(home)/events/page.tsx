import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { eventsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";
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
    title: "Events & Life Classes - Love First Christian Center",
    description:
      "Explore upcoming events and Life University classes at Love First Christian Center. Stay connected and engaged with our community. Discover how you can participate and make a difference.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/events",
    },
    alternates: {
      canonical: "https://www.lfcc.tv/events",
    },
  };
}

export default async function Events() {
  const [events] = await Promise.all([
    sanityFetch<any>({
      query: eventsQuery,
    }),
  ]);
  return (
    <div>
      <section className="eventHero">
        <div className="eventHeaderContent">
          <h1>Upcoming Events at Love First Christian Center</h1>
          <p>
            Stay updated with all our upcoming events and Life Classes here at
            Love First Christian Center. Join us and be a part of our community!
          </p>
        </div>
        <Image
          src="/eventsHeader.webp"
          alt="Events at Love First"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>
      <section className="lifeSection">
        <div className="lifeContent">
          <h2>Events and Life University Classes</h2>
          <p>
            Stay connected and engaged with the Love First Christian Center
            community by participating in our upcoming events and Life
            University classes. Our events offer dynamic opportunities to grow
            spiritually, build connections, and find fellowship with other
            members. From worship nights and outreach activities to
            family-centered events, there’s something for everyone. Don’t miss
            our seasonal gatherings and community celebrations, perfect for
            deepening your connection with the church family and discovering
            ways to serve and make a difference.
          </p>
          <p>
            Explore Life University classes at Love First Christian Center and
            enhance your spiritual journey. Designed to support both new and
            seasoned members, these classes provide insightful teachings and
            practical tools for personal growth and faith-building. Life
            University covers a range of topics, from discipleship and faith
            fundamentals to courses on leadership and service. Join us to deepen
            your understanding of God’s word, connect with mentors, and equip
            yourself to live out your faith confidently in everyday life. Be a
            part of this transformative learning experience!
          </p>
          <Link
            href="https://lovefirst.churchcenter.com/registrations/events"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="Register for an Upcoming Events at Love First"
          >
            Register for an Upcoming Events at Love First
          </Link>
        </div>
        <div className="lifeUniversityImageContainer">
          <Image
            src="/Life-U-Banner.webp"
            alt="Life University Classes"
            height={600}
            width={600}
          />
        </div>
      </section>
      <section className="individualEventSection">
        <h2>Current and Upcoming Events</h2>
        {events &&
          events.map(
            (
              el: {
                eventImage: string;
                name: string;
                description: string;
                redirectUrl: string;
              },
              i: number
            ) => {
              const imageUrl = urlForImage(el.eventImage)?.url();

              return (
                <div className="individualEventContainer" key={i}>
                  <div className="individualEventImageContainer">
                    <Image
                      src={imageUrl as string}
                      alt={`${el.name} - Love First Event`}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="individualEventContent">
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <Link
                      href={el.redirectUrl}
                      rel="noreferrer noopener"
                      target="_blank"
                      aria-label={`Register for ${el.name}`}
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              );
            }
          )}
      </section>
    </div>
  );
}
