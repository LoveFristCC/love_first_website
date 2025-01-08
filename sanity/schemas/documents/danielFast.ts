import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "danielFastContent",
  title: "Fasting Content",
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
      name: "fastingGuide",
      title: "Fasting Guide PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
  ],
});
