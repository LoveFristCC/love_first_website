import Image from "next/image";
import "./prayer.css";
import type { Metadata, ResolvingMetadata } from "next";
import YoutubeVideo from "./Youtube";
import PrayerForm from "./PrayerForm";

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
    title: "Prayer & Support - Love First Christian Center",
    description:
      "Find spiritual support at Love First Christian Center. Join daily prayer sessions with Pastor Jomo, submit your prayer requests, and connect with our community.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/prayer",
    },
  };
}

export default async function Prayer() {
  return (
    <>
      <section className="headerHero">
        <div className="headerContent">
          <h1>
            Seeking Prayer? Discover the Power of Prayer and Find Support Here
          </h1>
        </div>
        <Image
          src="/prayerHeader.webp"
          alt="A serene prayer setting to inspire spiritual reflection"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>

      <section className="infoAndVideoSection">
        <YoutubeVideo />
        <div className="infoContent">
          <h3>Experience the Transformative Power of Prayer</h3>
          <p>
            At Love First Christian Center, we know that when you pray, God
            answers. If you have accepted Jesus as your Lord and Savior, we want
            to know and celebrate with you.
          </p>
          <p>
            If you are in need of prayer, We want to be your prayer partner and
            help lift your burdens. No request is too small or too big. Please
            fill out the form below and let us stand in agreement with you for
            whatever situation you’re facing!
          </p>
        </div>
      </section>

      <section className="prayerRequestSection">
        <div className="textContent">
          <h2>Submit Your Prayer Requests and Find Support</h2>
          <p>
            At Love First Christian Center, we believe in the power of prayer.
            Let us join you in prayer for your needs, big or small. Submit your
            prayer request, and our team will stand in agreement with you,
            offering spiritual support and encouragement.
          </p>
        </div>
        <PrayerForm />
      </section>

      <section className="dailyPrayerSection">
        <h2>
          Join Our Daily Prayer Line with Pastor Jomo: Monday – Friday at 6:30
          AM
        </h2>
        <p>
          Join us every weekday morning for uplifting prayer sessions with
          Pastor Jomo. Whether you seek spiritual support, guidance, or a sense
          of community, our daily prayer line provides a meaningful start to
          your day.
        </p>

        <p>
          Call{" "}
          <strong>
            <a href="tel:6677701523">(667) 770-1523</a>
          </strong>{" "}
          and use Access Code: <strong>101804#</strong> or visit us on{" "}
          <strong>
            <a
              href="https://www.youtube.com/@PASTORJOMO/streams"
              target="_blank"
              aria-label="Daily Prayer with Pastor Jomo on YouTube"
              rel="noreferrer noopener"
            >
              YouTube
            </a>
          </strong>{" "}
          to participate. Everyone is welcome.
        </p>
      </section>
    </>
  );
}
