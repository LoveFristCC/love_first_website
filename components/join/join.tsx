import Link from "next/link";
import Image from "next/image";

const JoinSection = () => {
  return (
    <section className="joinSection">
      <div className="joinContentContainer">
        <div className="altLogoContainer">
          <Image
            src="/loveFirstAltLogo.webp"
            alt="Love First Christian Center"
            width={600}
            height={300}
          />
        </div>
        <div className="joinLpContent">
          <h2>Ready to Become a Member at Love First?</h2>
          <p>text here</p>

          <div className="joinButtons">
            <Link href={`/join`} className="joinLink">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
