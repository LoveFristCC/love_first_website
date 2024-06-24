import Image from "next/image";
import Link from "next/link";
import SermonSection from "@/components/SermonSection";

export default async function Page() {
  const date = new Date();
  const day = date.getDay();

  const serviceTime = day === 0 || day > 3 ? "sunday" : "wednesday";

  return (
    <div className="mainPage">
      <section className="heroContent">
        <div className="headlineContainer">
          <h1>
            Welcome to
            <br /> <span>Love First Christian Center</span>
          </h1>
          <p>Love People, Love God, Love First!</p>

          <div className="buttonContainer">
            <Link href={`/${serviceTime}`} className="serviceButtonContainer">
              Join Us {serviceTime}
            </Link>

            <Link href="/prayer" className="prayerLink">
              Request Prayer
            </Link>
          </div>
        </div>

        <div className="serviceTimesContainer">
          <h2>Service Times</h2>
          <div className="sundays">
            <p>Sundays:</p>
            <p> 7:45a | 9:45a (Sign Language Available) | 11:45a</p>
          </div>
          <div className="wednesdays">
            <p>Wednesdays:</p>
            <p>7:00p</p>
          </div>

          <Link href="/watch-online" className="watchOnline">
            Watch Online
          </Link>
        </div>
        <div className="overlay" />
        <video src="/lfccVideo.mp4" loop autoPlay muted playsInline />
      </section>
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
      <section className="communitySection">
        <h4>
          Join us for valuable ministries designed for children, youth, adults,
          and seniors.
        </h4>
        <div className="communityContentContainer">
          <Link
            href="/connect/ministries/254955"
            className="mainImageContainer"
          >
            <Image
              src="/teens.webp"
              width={600}
              height={300}
              alt="Kids and Youth Ministry"
            />
          </Link>
          <div className="ministryContainer">
            <Link
              href="/connect/ministries/157955"
              className="ministryImageContainer"
            >
              <Image
                src="/MEN.webp"
                width={300}
                height={100}
                alt="Mens Ministry"
              />
            </Link>
            <Link
              href="/connect/ministries/158579"
              className="ministryImageContainer"
            >
              <Image
                src="/womenMinistry.webp"
                width={300}
                height={100}
                alt="Womens Ministyr"
              />
            </Link>
            <Link
              href="/connect/ministries/158609"
              className="ministryImageContainer"
            >
              <Image
                src="/Singles.webp"
                width={300}
                height={100}
                alt="Singles Ministry"
              />
            </Link>
            <Link
              href="/connect/ministries/2220040"
              className="ministryImageContainer"
            >
              <Image
                src="/youngAdults.webp"
                width={300}
                height={100}
                alt="Young Adults Ministry"
              />
            </Link>
          </div>
        </div>
        <Link href="/connect" className="viewWhatWeOffer">
          Explore Our Ministries
        </Link>

        {/* TODO: add additional ministries here with scroll */}
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="waveSvg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,202.7C672,213,768,171,864,165.3C960,160,1056,192,1152,218.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <SermonSection />
    </div>
  );
}
