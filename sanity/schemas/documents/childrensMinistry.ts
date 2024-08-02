import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "childrenMinistryEvents",
  title: "Children Ministry Highlights",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
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
      name: "eventImages",
      title: "Event Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (rule) =>
        rule.required().min(1).error("At least one image is required."),
    }),
  ],
});
