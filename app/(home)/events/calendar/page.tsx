import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Events Calendar - Love First Christian Center",
    description:
      "Stay updated with all upcoming events and activities at Love First Christian Center. Explore our calendar and join us in community, worship, and fellowship.",
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
          layout="fill"
          objectFit="cover"
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
