"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { PluginOptions, defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
// import {
//   presentationTool,
//   defineDocuments,
//   defineLocations,
//   type DocumentLocation,
// } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import events from "@/sanity/schemas/documents/events";
import leaders from "@/sanity/schemas/documents/leaders";
import teenHighlights from "@/sanity/schemas/documents/teenMinistry";
import childrenHighlights from "@/sanity/schemas/documents/childrensMinistry";
import childrenLessons from "@/sanity/schemas/documents/childrenLessons";
import alertMessage from "@/sanity/schemas/documents/alert";
import bibleStudyNotes from "@/sanity/schemas/documents/bibleStudyNotes";
import youtubeSermons from "@/sanity/schemas/collections/youtubeSermons";
import redirects from "@/sanity/schemas/documents/redirects";
import fileUploads from "./sanity/schemas/documents/fileUploads";
import settings from "@/sanity/schemas/singletons/settings";
import danielFast from "@/sanity/schemas/documents/danielFast";
import seasonalPage from "@/sanity/schemas/documents/seasonalPage";
import bigGive from "@/sanity/schemas/documents/bigGive";

// import { resolveHref } from "@/sanity/lib/utils";

// const homeLocation = {
//   title: "Home",
//   href: "/",
// } satisfies DocumentLocation;

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: [
      settings,
      youtubeSermons,
      leaders,
      events,
      teenHighlights,
      childrenHighlights,
      childrenLessons,
      bibleStudyNotes,
      redirects,
      alertMessage,
      danielFast,
      bigGive,
      seasonalPage,
      fileUploads,
    ],
  },
  plugins: [
    // presentationTool({
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: "/posts/:slug",
    //         filter: `_type == "post" && slug.current == $slug`,
    //       },
    //     ]),
    //     locations: {
    //       settings: defineLocations({
    //         locations: [homeLocation],
    //         message: "This document is used on all pages",
    //         tone: "caution",
    //       }),
    //       post: defineLocations({
    //         select: {
    //           title: "title",
    //           slug: "slug.current",
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.title || "Untitled",
    //               href: resolveHref("post", doc?.slug)!,
    //             },
    //             homeLocation,
    //           ],
    //         }),
    //       }),
    //     },
    //   },
    //   previewUrl: { previewMode: { enable: "/api/draft" } },
    // }),
    structureTool({ structure: pageStructure([settings]) }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Sets up AI Assist with preset prompts
    // https://www.sanity.io/docs/ai-assist
    assistWithPresets(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
});
