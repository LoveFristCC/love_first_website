import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { leadershipQuery } from "@/sanity/lib/queries";

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
        <div>
          <h1>Meet our staff</h1>
          <p>message about pastor here</p>
        </div>
        {/* <img/> */}
      </section>
      <section className="pastorsSection">
        <h2>Meet Our Pastors</h2>
        {pastors &&
          pastors.map(
            (
              el: {
                picture: string;
                name: string;
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
                <div key={i} className="leaderCard">
                  <div className="leaderImage">
                    <Image
                      src={imageUrl as string}
                      alt={`${el.name} - Love First`}
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="leaderContent">
                    <h3>{el.name}</h3>
                    <h3>{el.pastorTitle}</h3>
                    {el.email && (
                      <p>
                        Email: <br />
                        <a href={`mailto:${el.email}`}>{el.email}</a>
                      </p>
                    )}
                  </div>
                </div>
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
                picture: string;
                name: string;
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
                <div key={i} className="leaderCard">
                  <div className="leaderImage">
                    <Image
                      src={imageUrl as string}
                      alt={`${el.name} - Love First`}
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="leaderContent">
                    <h3>{el.name}</h3>
                    <h3>{el.pastorTitle}</h3>
                    {el.email && (
                      <p>
                        Email: <br />
                        <a href={`mailto:${el.email}`}>{el.email}</a>
                      </p>
                    )}
                  </div>
                </div>
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
                picture: string;
                name: string;
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
                <div key={i} className="leaderCard">
                  <div className="leaderImage">
                    <Image
                      src={imageUrl as string}
                      alt={`${el.name} - Love First`}
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="leaderContent">
                    <h3>{el.name}</h3>
                    <h3>{el.pastorTitle}</h3>
                    {el.email && (
                      <p>
                        Email: <br />
                        <a href={`mailto:${el.email}`}>{el.email}</a>
                      </p>
                    )}
                  </div>
                </div>
              );
            }
          )}
      </section>
    </div>
  );
}
