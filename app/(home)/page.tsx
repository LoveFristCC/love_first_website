import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  return (
    <div className="mainPage">
      <section className="heroContent">
        <h1>
          Welcome to
          <br /> <span>Love First Christian Center!</span>
        </h1>

        <div className="heroCardContainer">
          <div className="cardContainer">
            <Image
              src="/in-person.webp"
              alt="Join Love First In person"
              height={100}
              width={90}
            />
            <h2>Service Times</h2>
            <p>Join us in person on Sundays at</p>
            <p>7:45a | 9:45a | 11:45a</p>
            <p>Wednesdays at 7:00p</p>
          </div>
          <div className="cardContainer">
            <Image
              src="/live2.webp"
              alt="Watch Church Online"
              height={50}
              width={60}
            />
            <h2>Watch Online</h2>
            <p>
              Watch Love First online or watch any of our previous sermons now!
            </p>
            <Link href="/watch-online">Watch Now</Link>
          </div>
          <div className="cardContainer">
            <Image
              src="/location.webp"
              alt="Watch Church Online"
              height={50}
              width={40}
            />
            <h2>Location</h2>
            <p>
              Join us in person at 12847 Balm Riverview Rd, Riverview, FL 33579.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
