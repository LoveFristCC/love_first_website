import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "events",
  title: "Events",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Event Name / Life U Classes",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "eventImage",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
