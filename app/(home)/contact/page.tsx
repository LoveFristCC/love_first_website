import Link from "next/link";
import { Suspense } from "react";
import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Contact() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<HeroQueryResult>({ query: heroQuery }),
  ]);

  return <div className="container mx-auto px-5">Contact Page</div>;
}
