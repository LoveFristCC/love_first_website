import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "bigGiveContent",
  title: "Big Give Content",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sub Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeVideo",
      title: "YouTube Id",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "redirectUrl",
      title: "Giving Link",
      type: "url",
      validation: (rule) =>
        rule
          .uri({
            scheme: ["http", "https"],
            allowRelative: true,
          })
          .required(),
    }),
    defineField({
      name: "percentFinished",
      title: "Percent Finished",
      type: "string",
    }),
    defineField({
      name: "impactHeadline",
      title: "Impact Headline",
      type: "string",
    }),
    defineField({
      name: "impactContentHeadlineOne",
      title: "Impact Content Headline One",
      type: "string",
    }),
    defineField({
      name: "impactContentTextOne",
      title: "Impact Content Text One",
      type: "text",
    }),
    defineField({
      name: "impactContentHeadlineTwo",
      title: "Impact Content Headline Two",
      type: "string",
    }),
    defineField({
      name: "impactContentTextTwo",
      title: "Impact Content Text Two",
      type: "text",
    }),
    defineField({
      name: "impactContentHeadlineThree",
      title: "Impact Content Headline Three",
      type: "string",
    }),
    defineField({
      name: "impactContentTextThree",
      title: "Impact Content Text Three",
      type: "text",
    }),
    defineField({
      name: "bigGiveSection",
      title: "Big Give Section Headline",
      type: "string",
    }),
    defineField({
      name: "bigGiveSectionDate",
      title: "Date of Big Give",
      type: "string",
    }),
    defineField({
      name: "bigGiveSectionBibleVerse",
      title: "Bible Verse",
      type: "text",
    }),
  ],
});
