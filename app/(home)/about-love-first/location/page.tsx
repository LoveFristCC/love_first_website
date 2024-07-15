import Link from "next/link";
import { Suspense } from "react";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Location() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <div className="container mx-auto px-5">
      <div className="aboutHeader" />
      <section>
        <h1>History</h1>
        <div className="">
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
          <p>Jomo and Charmaine</p>
        </div>
      </section>
      <section>
        <h1>Vision</h1>
      </section>
      <section>
        <h1>What we believe</h1>
      </section>
    </div>
  );
}
