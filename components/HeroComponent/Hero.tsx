import Link from "next/link";

const Hero = ({ serviceTime }: { serviceTime: string }) => {
  return (
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
  );
};

export default Hero;
