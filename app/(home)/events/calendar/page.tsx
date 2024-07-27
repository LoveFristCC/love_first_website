import Link from "next/link";
import { Suspense } from "react";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Calendar() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return (
    <div className="container mx-auto px-5">
      <iframe
        src="https://lovefirst.churchcenter.com/calendar?embed=true&view=month"
        width="100%"
        height="600px"
        className="planning-center-calender-embed"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
