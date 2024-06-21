import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const date = new Date();
  const day = date.getDay();

  const serviceTime = day === 0 || day > 3 ? "sunday" : "wednesday";

  return (
    <div className="mainPage">
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
        </div>
        <div className="overlay" />
        <video src="/lfccVideo.mp4" loop autoPlay muted playsInline />
      </section>
      <section className="welcomeSection">
        <div className="welcomeContentContainer">
          <div className="welcomeContent">
            <h3>Experience Faith, Fellowship, and Transformation</h3>
            <p>
              Join us for inspiring worship, deep connections, and a caring
              community that transforms lives.
            </p>

            <div className="welcomeButtons">
              <Link href={`/${serviceTime}`} className="welcomeLink">
                Join Us {serviceTime}
              </Link>
              <Link href={`/i-am-new`} className="welcomeLink">
                I&apos;m new here
              </Link>
            </div>
          </div>
          <div className="altLogoContainer">
            <Image
              src="/loveFirstAltLogo.webp"
              alt="Love First Christian Center"
              width={600}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
