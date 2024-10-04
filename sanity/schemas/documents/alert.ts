import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "alertMessage",
  title: "Alert Message",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required().error("Message is required."),
    }),
    defineField({
      name: "redirectUrl",
      title: "Button Redirect",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
