import "./join.css";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";

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
    title: "Join - Love First Christian Center",
    description:
      "Join Love First Christian Center, grow in faith, connect with a loving community, and enroll in our New Member Orientation. Start your journey today.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/join",
    },
    alternates: {
      canonical: "https://www.lfcc.tv/join",
    },
  };
}

export default async function JoinPage() {
  return (
    <div>
      <section className="joinHero">
        <div className="joinHeroContent">
          <h1>Join Love First Christian Center</h1>
          <p>
            Thank you for considering joining our family. We’re excited to have
            you partner with us in ministry at Love First Christian Center.
            Making the decision to partner with us means becoming a change agent
            that God can use to redeem the world.
          </p>
        </div>
        <Image
          src="/join.webp"
          alt="Join Love First Christian Center"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </section>
      <section className="joinContentSection">
        <div className="joinContent">
          <h2>New Member Orientation</h2>
          <p>
            It’s a great way for you to get to know who we are, what we believe,
            and why we believe it. This class also helps us get to know you and
            how we can best serve you and your family.
          </p>
          <p>
            By submitting this form this will automatically enroll you in the
            New Members Orientation Class, which is required prior to
            membership. Please be on the lookout for your enrollment
            confirmation in your email inbox.
          </p>
          <p>
            <strong>Note:</strong> Minors under 18 years of age should not
            register for New Member Orientation. They can attend with adults but
            are not required to register.
          </p>
          <a href="https://lovefirst.churchcenter.com/people/forms/133493?open-in-church-center-modal=true">
            Complete New Member Form
          </a>
        </div>
      </section>
      <Script src="https://js.churchcenter.com/modal/v1" />
    </div>
  );
}
