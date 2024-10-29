import Link from "next/link";
import Image from "next/image";

const WelcomeSection = ({ serviceTime }: { serviceTime: string }) => {
  return (
    <section className="welcomeSection">
      <div className="welcomeContentContainer">
        <div className="welcomeContent">
          <h2>Experience Faith, Fellowship, and Transformation</h2>
          <p>
            Join us for inspiring worship, deep connections, and a caring
            community that transforms lives.
          </p>

          <div className="welcomeButtons">
            <Link href={`/about-love-first/location`} className="welcomeLink">
              Join Us {serviceTime}
            </Link>
            <Link href={`/about-love-first`} className="welcomeLink">
              I&apos;m new here
            </Link>
            <Link
              href="https://lovefirst.churchcenter.com/registrations/events"
              target="_blank"
              rel="noreferrer noopener"
              className="welcomeLink"
              aria-label="Register for upcoming events"
            >
              Register for upcoming events
            </Link>
          </div>
        </div>
        <div className="altLogoContainer">
          <Image
            src="/loveFirstAltLogo.webp"
            alt="Love First Christian Center"
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
