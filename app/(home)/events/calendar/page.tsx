import Image from "next/image";
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
    title: "Events Calendar - Love First Christian Center",
    description:
      "Stay updated with all upcoming events and activities at Love First Christian Center. Explore our calendar and join us in community, worship, and fellowship.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/events/calendar",
    },
  };
}

export default async function Calendar() {
  return (
    <div>
      <section className="calendarHero">
        <div className="calendarHeaderContent">
          <h1>Calendar of Events at Love First Christian Center</h1>
          <p>
            Stay updated with all our upcoming events and activities. Join us
            and be a part of our community!
          </p>
        </div>
        <Image
          src="/calendarHeader.webp"
          alt="Calendar of Events at Love First"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>

      <section className="calendarSection">
        <iframe
          src="https://lovefirst.churchcenter.com/calendar?embed=true&view=month"
          width="100%"
          height="600px"
          className="planning-center-calender-embed"
          title="Love First Christian Center Calendar"
          frameBorder="0"
        ></iframe>
      </section>
    </div>
  );
}
