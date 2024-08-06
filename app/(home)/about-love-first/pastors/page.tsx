import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { sanityFetch } from "@/sanity/lib/fetch";
import { leadershipQuery } from "@/sanity/lib/queries";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Meet the Team - Pastors, Staff & Ministers at Love First",
    description:
      "Meet the dedicated team at Love First Christian Center. Discover our pastors, staff, and ministers and learn how they support and lead our community with passion.",
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
    <div>
      <section className="leadersHeroSection">
        <div className="leadersHeroContent">
          <h1>
            Get to Know the Dedicated Team Behind Love First Christian Center
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="leadersHeroImage">
          <Image
            src="/Jomo-Charmaine-Leadership.webp"
            alt="Jomo and Charmaine Cousins"
            height={400}
            width={400}
            priority
          />
        </div>
      </section>
      <section className="pastorsSection">
        <h2>Meet Our Pastors</h2>
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
                ?.height(300)
                .width(300)
                .url();
              return (
                <article key={i} className="leaderCard">
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
                </article>
              );
            }
          )}
      </section>
      <section className="staffSection">
        <h2>Meet Our Staff</h2>
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
                ?.height(300)
                .width(300)
                .url();
              return (
                <article key={i} className="leaderCard">
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
                </article>
              );
            }
          )}
      </section>
      <section className="ministerSection">
        <h2>Meet Our Ministers</h2>
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
                ?.height(300)
                .width(300)
                .url();
              return (
                <article key={i} className="leaderCard">
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
                </article>
              );
            }
          )}
      </section>
    </div>
  );
}
