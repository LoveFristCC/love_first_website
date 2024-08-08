import Image from "next/image";
import "./prayer.css";
import type { Metadata } from "next";
import YoutubeVideo from "./Youtube";
import PrayerForm from "./PrayerForm";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Prayer & Support - Love First Christian Center",
    description:
      "Find spiritual support at Love First Christian Center. Join daily prayer sessions with Pastor Jomo, submit your prayer requests, and connect with our community.",
    openGraph: {
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
          layout="fill"
          objectFit="cover"
          priority
        />
      </section>

      <section className="infoAndVideoSection">
        <YoutubeVideo />
        <div className="infoContent">
          <h3>Experience the Transformative Power of Prayer</h3>
          <p>
            Elit at imperdiet dui accumsan sit amet nulla. Venenatis urna cursus
            eget nunc scelerisque viverra mauris in aliquam. Ut enim blandit
            volutpat maecenas volutpat blandit aliquam. Odio facilisis mauris
            sit amet massa. Diam quam nulla porttitor massa id neque aliquam.
            Egestas tellus rutrum tellus pellentesque eu. Vulputate ut pharetra
            sit amet. Morbi non arcu risus quis. Massa enim nec dui nunc. At
            tellus at urna condimentum mattis pellentesque id. Suspendisse
            potenti nullam ac tortor. Sollicitudin nibh sit amet commodo.
            Vulputate enim nulla aliquet porttitor lacus. Viverra mauris in
            aliquam sem fringilla ut morbi. Posuere sollicitudin aliquam
            ultrices sagittis orci a scelerisque purus. Convallis tellus id
            interdum velit laoreet id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
          and use Access Code: <strong>101804#</strong> to participate. Everyone
          is welcome.
        </p>
      </section>
    </>
  );
}
