import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { sanityFetch } from "@/sanity/lib/fetch";
import { leadershipQuery } from "@/sanity/lib/queries";
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
    title: "Meet the Team - Pastors, Staff & Ministers at Love First",
    description:
      "Meet the dedicated team at Love First Christian Center. Discover our pastors, staff, and ministers and learn how they support and lead our community with passion.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: `https://www.lfcc.tv/about-love-first/pastors`,
    },
    alternates: {
      canonical: `https://www.lfcc.tv/about-love-first/pastors`,
    },
  };
}

export default async function Pastors() {
  const [leaders] = await Promise.all([
    sanityFetch<any>({
      query: leadershipQuery,
    }),
  ]);

  const pastors = leaders.pastors;
  const ministers = leaders.ministers;
  const staff = leaders.staff;

  return (
    <>
      <section className="leadersHeroSection">
        <div className="leadersHeroContent">
          <h1>
            Get to Know the Dedicated Team Behind Love First Christian Center
          </h1>
        </div>
        <div className="leadersHeroImage">
          <Image
            src="/Jomo-Charmaine-Leadership.webp"
            alt="Jomo and Charmaine Cousins"
            height={300}
            width={300}
            priority
            quality={100}
          />
        </div>
      </section>
      <section className="pastorsSection">
        <div className="stickyHeader">
          <h2>Meet Our Pastors</h2>
        </div>
        <div className="leaderCardContainer">
          {pastors &&
            pastors.map(
              (
                el: {
                  name: string;
                  picture: string;
                  pastorTitle: string;
                  email: string;
                },
                i: number
              ) => {
                const imageUrl = urlForImage(el.picture)
                  ?.width(1000)
                  .height(1000)
                  .fit("crop")
                  .focalPoint(0.5, 0.3)
                  .url();
                return (
                  <div key={i} className="leaderCard">
                    <div className="leaderImage">
                      <Image
                        src={imageUrl as string}
                        alt={`${el.name} - Pastor at Love First Christian Center`}
                        height={300}
                        width={300}
                      />
                    </div>
                    <div className="leaderContent">
                      <h3>{el.name}</h3>
                      <h4>{el.pastorTitle}</h4>
                      {el.email && (
                        <p>
                          <a href={`mailto:${el.email}`}>Email {el.name}</a>
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </section>
      <section className="staffSection">
        <div className="stickyHeader">
          <h2>Meet Our Staff</h2>
        </div>
        <div className="leaderCardContainer">
          {staff &&
            staff.map(
              (
                el: {
                  name: string;
                  picture: string;
                  pastorTitle: string;
                  email: string;
                },
                i: number
              ) => {
                const imageUrl = urlForImage(el.picture)
                  ?.height(1000)
                  .width(1000)
                  .fit("crop")
                  .focalPoint(0.5, 0.3)
                  .url();
                return (
                  <div key={i} className="leaderCard">
                    <div className="leaderImage">
                      <Image
                        src={imageUrl as string}
                        alt={`${el.name} - Staff at Love First Christian Center`}
                        height={300}
                        width={300}
                      />
                    </div>
                    <div className="leaderContent">
                      <h3>{el.name}</h3>
                      <h4>{el.pastorTitle}</h4>
                      {el.email && (
                        <p>
                          <a href={`mailto:${el.email}`}>Email {el.name}</a>
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </section>
      <section className="ministerSection">
        <div className="stickyHeader">
          <h2>Meet Our Ministers</h2>
        </div>
        <div className="leaderCardContainer">
          {ministers &&
            ministers.map(
              (
                el: {
                  name: string;
                  picture: string;
                  pastorTitle: string;
                  email: string;
                },
                i: number
              ) => {
                const imageUrl = urlForImage(el.picture)
                  ?.height(1000)
                  .width(1000)
                  .url();
                return (
                  <div key={i} className="leaderCard">
                    <div className="leaderImage">
                      <Image
                        src={imageUrl as string}
                        alt={`${el.name} - Minister at Love First Christian Center`}
                        height={300}
                        width={300}
                      />
                    </div>
                    <div className="leaderContent">
                      <h3>{el.name}</h3>
                      <h4>{el.pastorTitle}</h4>
                      {el.email && (
                        <p>
                          <a href={`mailto:${el.email}`}>Email {el.name}</a>
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </section>
    </>
  );
}
