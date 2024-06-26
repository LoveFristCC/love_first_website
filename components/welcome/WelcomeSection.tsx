import Link from "next/link";
import Image from "next/image";

const WelcomeSection = ({ serviceTime }: { serviceTime: string }) => {
  return (
    <section className="welcomeSection">
      <div className="welcomeContentContainer">
        <div className="welcomeContent">
          <h3>Experience Faith, Fellowship, and Transformation</h3>
          <p>
            Join us for inspiring worship, deep connections, and a caring
            community that transforms lives.
          </p>

          <div className="welcomeButtons">
            <Link href={`/${serviceTime}`} className="welcomeLink">
              Join Us {serviceTime}
            </Link>
            <Link href={`/i-am-new`} className="welcomeLink">
              I&apos;m new here
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
