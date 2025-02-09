import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { DateTime } from "luxon";
import SermonSection from "@/components/sermons/SermonSection";
import {
  nextSundayMorning,
  nextSundayAfternoon,
  nextSundayLateMorning,
  nextWednesday,
} from "@/app/utils/seoServiceDate";
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
    title: "Online Church Services | Live & On-Demand - Love First",
    description:
      "Join live church services online from anywhere. Stream Sunday worship and Wednesday Bible study with Love First. Watch now or view on-demand sermons.",
    keywords: [
      "watch church services online",
      "live church services online",
      "online church service",
      "stream church services",
      "virtual church services",
      "Sunday worship online",
      "Christian live stream",
    ],
    openGraph: {
      title: "Online Church Services | Live & On-Demand - Love First",
      description:
        "Join live church services online from anywhere. Stream Sunday worship and Wednesday Bible study with Love First Christian Center. Watch now or view on-demand sermons.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Love First Christian Center",
    url: "https://www.lfcc.tv",
    event: [
      {
        "@type": "EventSeries",
        name: "Weekly Sunday Worship Services",
        startDate: nextSundayMorning,
        eventSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: "http://schema.org/Sunday",
          startTime: DateTime.fromISO(nextSundayMorning as string).toFormat(
            "HH:mm:ssZZ"
          ),
          endTime: DateTime.fromISO(nextSundayMorning as string)
            .plus({ minutes: 75 })
            .toFormat("HH:mm:ssZZ"),
        },
        location: {
          "@type": "VirtualLocation",
          url: "https://www.lfcc.tv/watch-online",
        },
        subEvent: [
          {
            "@type": "Event",
            name: "Sunday Morning Worship",
            startDate: nextSundayMorning,
            endDate: DateTime.fromISO(nextSundayMorning as string)
              .plus({ minutes: 75 })
              .toISO(),
          },
          {
            "@type": "Event",
            name: "Sunday Late Morning Worship",
            startDate: nextSundayLateMorning,
            endDate: DateTime.fromISO(nextSundayLateMorning as string)
              .plus({ minutes: 75 })
              .toISO(),
          },
          {
            "@type": "Event",
            name: "Sunday Afternoon Worship",
            startDate: nextSundayAfternoon,
            endDate: DateTime.fromISO(nextSundayAfternoon as string)
              .plus({ minutes: 75 })
              .toISO(),
          },
        ],
      },
      {
        "@type": "EventSeries",
        name: "Weekly Bible Study",
        startDate: nextWednesday,
        eventSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: "http://schema.org/Wednesday",
          startTime: DateTime.fromISO(nextWednesday as string).toFormat(
            "HH:mm:ssZZ"
          ),
          endTime: DateTime.fromISO(nextWednesday as string)
            .plus({ minutes: 90 })
            .toFormat("HH:mm:ssZZ"),
        },
        location: {
          "@type": "VirtualLocation",
          url: "https://www.lfcc.tv/watch-online",
        },
      },
    ],
  };

  return (
    <div className="wo-container">
      <Script
        id="church-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="wo-hero">
        <Image
          src="/onlineBackground.webp"
          alt="Live Church Services Online - Love First Christian Center"
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="wo-hero-background"
        />
        <div className="wo-hero-content">
          <h1 className="wo-hero-title">
            Watch Church Services Online from Anywhere.
          </h1>
          <p className="wo-hero-description">
            Experience authentic Christian community with Love First&apos;s{" "}
            <strong>live online church services</strong>. Join thousands of
            believers across America for powerful worship, biblical teaching,
            and spiritual connection. Participate live every Sunday and
            Wednesday or watch on-demand at your convenience.
          </p>
          <div className="wo-hero-buttons">
            <Link
              href="https://lovefirstcc.online.church/"
              className="wo-button wo-button-primary"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Join Live Church Service Now"
            >
              Join Live Service Now
            </Link>
            <Link
              href="https://www.youtube.com/@LovefirstChristianCenter/streams"
              className="wo-button wo-button-secondary"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Watch on YouTube Live"
            >
              YouTube Live Stream
            </Link>
          </div>
        </div>
      </section>

      <section className="wo-info-section">
        <div className="wo-content-wrapper">
          <h2 className="wo-section-title">Weekly Live Stream Schedule</h2>
          <div className="wo-schedule">
            <div className="wo-schedule-item">
              <h3>Sunday Worship</h3>
              <p>7:45 AM | 9:45 AM | 11:45 AM (EST)</p>
            </div>
            <div className="wo-schedule-item">
              <h3>Wednesday Bible Study</h3>
              <p>7:00 PM (EST)</p>
            </div>
          </div>
          <p className="wo-info-note">
            All services available live online. Set reminders for your preferred
            service time and never miss a moment of worship.
          </p>
        </div>
      </section>

      <SermonSection path="online" />

      <section className="wo-on-demand-section">
        <div className="wo-content-wrapper">
          <h2 className="wo-section-title">
            24/7 On-Demand Worship Experience
          </h2>
          <p className="wo-section-description">
            Access our entire library of <strong>online church services</strong>{" "}
            featuring:
          </p>
          <ul className="wo-feature-list">
            <li>Full Sunday worship recordings</li>
            <li>Bible study archives</li>
            <li>Seasonal sermon series</li>
            <li>Special event recordings</li>
          </ul>
          <Link
            href="/watch-online/previous-sermons"
            className="wo-button wo-button-primary"
            aria-label="Browse All Sermons"
          >
            Browse Sermon Library
          </Link>
        </div>
      </section>

      <section className="wo-faq-section">
        <div className="wo-content-wrapper">
          <h2 className="wo-section-title">Frequently Asked Questions</h2>
          <div className="wo-faq-grid">
            <div className="wo-faq-item">
              <h3>How do I watch church services online?</h3>
              <p>
                Simply click &quot;Join Live Service Now&quot; during service
                times or select any previous sermon from our library. No account
                required - completely free access.
              </p>
            </div>
            <div className="wo-faq-item">
              <h3>Can I take notes during the live stream?</h3>
              <p>
                Yes! Our live stream includes an interactive notes feature that
                lets you jot down reflections and save key insights in real
                time. You can easily revisit your notes after the service to
                reflect on meaningful moments from the sermon.
              </p>
            </div>
            <div className="wo-faq-item">
              <h3>Can I participate in live chat?</h3>
              <p>
                Yes! Our live stream includes interactive prayer requests and
                real-time chat with our ministry team.
              </p>
            </div>
            <div className="wo-faq-item">
              <h3>Is there an online Bible available during the service?</h3>
              <p>
                Absolutely! You’ll find multiple translations, search tools, and
                verse highlighting to help you follow along with the sermon or
                study independently. Best of all—it’s completely free to use!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchOnline;
