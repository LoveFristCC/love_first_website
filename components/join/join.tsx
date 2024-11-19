import Link from "next/link";
import Image from "next/image";

const JoinSection = () => {
  return (
    <section className="joinSection">
      <div className="joinContentContainer">
        <div className="newMemberLogoContainer">
          <Image
            src="/lfcc-new-member.webp"
            alt="Love First Christian Center new member"
            width={600}
            height={300}
          />
        </div>
        <div className="joinLpContent">
          <h2>Ready to Become a Member at Love First?</h2>

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
