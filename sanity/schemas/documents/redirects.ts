import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "redirects",
  title: "Site Redirects",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Route To Redirect",
      type: "string",
      validation: (Rule) => Rule.required().error("Route is required."),
    }),
    defineField({
      name: "redirectUrl",
      title: "Redirect URL",
      type: "url",
      validation: (rule) =>
        rule
          .uri({
            scheme: ["http", "https"],
            allowRelative: true,
          })
          .required(),
    }),
  ],
});
