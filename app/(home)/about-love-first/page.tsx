import Image from "next/image";
import Link from "next/link";
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
    title: "About Love First Christian Center",
    description:
      "Discover the inspiring story and vision of Love First Christian Center. Learn about our history, meet our leadership, and find your purpose here.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: `https://www.lfcc.tv/about-love-first`,
    },
  };
}

export default async function AboutLoveFirst() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <Image
          src="/aboutUs.webp"
          alt="Love First History and Beliefs"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
        <div className="loveFirstAboutHeader">
          <h1>Learn More About Love First</h1>
          <p>Find Your Purpose Here</p>
        </div>
      </div>
      <section className="visitSection">
        <div className="visitOption">
          <Link href="/about-love-first/location" className="visitLink">
            Visit us in person →
          </Link>
          <p className="visitDescription">
            Discover our church&apos;s location and join us for in-person
            services.
          </p>
        </div>
        <div className="visitOption">
          <Link href="/watch-online" className="visitLink">
            Visit us online →
          </Link>
          <p className="visitDescription">
            Watch our services online and be part of our community from
            anywhere.
          </p>
        </div>
        <div className="visitOption">
          <Link href="/about-love-first/pastors" className="visitLink">
            Meet Our Leadership →
          </Link>
          <p className="visitDescription">
            Get to know our pastors and church leaders who guide our
            congregation.
          </p>
        </div>
      </section>
      <section className="historySection">
        <h2 className="sectionTitle">
          The History of Love First Christian Center
        </h2>
        <div className="historyContent">
          <p>
            Pastor Jomo Cousins dreamed of planting a church with a simple goal:
            help people connect with God in a church without letting structures
            and programs get in the way. With the help of his family they
            committed to seeing this dream become a reality—Love First Christian
            Center began on July 28th, 2008. That first Sunday, was started in a
            youth room of a rented church and within 90 days growth forced a
            move into the main sanctuary on Dixon Drive.
          </p>
          <p>
            Pastor Jomo focused on reaching out to the non-churched community,
            building relationships through outreach and prayer. The life-giving
            message of the Gospel, the passion and joy of Sunday Celebrations,
            and the simple style of Love First Christian Center brought
            immediate growth. In its first year, the church grew to 300 in
            weekly attendance.
          </p>
          <p>
            The church established a new location at Riverview High School on
            July 4th 2010 and established a second location for Bible studies,
            small groups and food pantry in 2011. In its fourth year, Love First
            Christian Center had over 700 in weekly attendance. The church then
            purchased 10 acres of land in the Panther Trace community for it’s
            future location in May of 2012.
          </p>
          <p>
            In March of 2016 we moved into our church edifice on 12847 Balm
            Riverview Rd. The building was completed debt free to the glory of
            God. The building has a total capacity of 1387. The building is part
            of phase one on the property on our campus. We will be building
            another larger sanctuary in the next few years and convert the
            current building into a community center for the youth.
          </p>
          <p>
            As Love First Christian Center heads into its twelfth year, the
            church has grown to more than 2200 active members. Love First
            Christian Center offers contemporary, biblically-driven worship
            services that are alive with energy and creativity, as well as
            excellent childcare, exciting children’s and student ministries, and
            dynamic small groups.
          </p>
          <p>
            God is at work at Love First Christian Center. If you haven’t
            visited, we invite you to see for yourself how exciting church can
            be when the focus is simple and people are free to go after God with
            passion!
          </p>
          <p className="signature">Jomo and Charmaine</p>
        </div>
      </section>
      <section className="visionSection">
        <h2 className="sectionTitle">Vision</h2>
        <div className="visionContent">
          <p>
            To&nbsp;<strong>Equip</strong>&nbsp;people with the knowledge of
            God’s word
          </p>
          <p>
            To&nbsp;<strong>Empower</strong>&nbsp;people to seek God’s face in
            daily prayer
          </p>
          <p>
            To&nbsp;<strong>Encounter</strong>&nbsp;and be filled with the Holy
            Spirit
          </p>
          <p>
            To&nbsp;<strong>Evangelize</strong> our community, our country, and
            our world
          </p>
          <p>
            To&nbsp;<strong>Embrace</strong>&nbsp;every person in Godly love,
            for God is Love
          </p>
          <p>
            <strong>For&nbsp;Each&nbsp;One to Reach One</strong>
          </p>
        </div>
      </section>
      <section className="beliefsSection">
        <h2 className="sectionTitle">What we believe</h2>
        <div className="beliefsContent">
          <p>
            <strong>WE BELIEVE</strong>…the entire Bible is inspired by God,
            without error and the authority on which we base our faith, conduct
            and doctrine.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…in one God who exists in three distinct
            persons: Father, Son and Holy Spirit. We believe Jesus Christ is the
            Son of God who came to this earth as Savior of the world.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…Jesus died on the cross and shed His
            blood for our sins. We believe Jesus rose from the dead and is
            coming again. We believe that eternal salvation is found only by
            placing our faith in Jesus Christ and what He did for us on the
            cross.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…in the subsequent experience of being
            filled with the Holy Spirit with the evidence of speaking in other
            tongues.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…water baptism is a symbol of the
            cleansing power of the blood of Christ and an outward testimony to
            our faith in the Lord Jesus Christ.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…in the regular taking of Communion as an
            act of remembering what the Lord Jesus did for us on the cross.
          </p>
          <p>
            <strong>WE BELIEVE</strong>…every believer should be in a growing
            relationship with Jesus by obeying God’s Word, yielding to the Holy
            Spirit and by being conformed to the image of Christ.
          </p>
        </div>
      </section>
    </div>
  );
}
