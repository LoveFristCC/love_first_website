import Link from "next/link";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <section className="communitySection">
      <h4>
        Join us for valuable ministries designed for children, youth, adults,
        and seniors.
      </h4>
      <div className="communityContentContainer">
        <Link href="/connect/ministries/254955" className="mainImageContainer">
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
  );
};

export default CommunitySection;
