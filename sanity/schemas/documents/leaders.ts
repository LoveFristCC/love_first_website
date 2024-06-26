import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "leaders",
  title: "Leaders",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      // fields: [
      //   {
      //     name: "alt",
      //     type: "string",
      //     title: "Alternative text",
      //     description: "Important for SEO and accessiblity.",
      //     validation: (rule) => {
      //       return rule.custom((alt, context) => {
      //         if ((context.document?.picture as any)?.asset?._ref && !alt) {
      //           return "Required";
      //         }
      //         return true;
      //       });
      //     },
      //   },
      // ],
      options: {
        hotspot: true,
        // aiAssist: {
        //   imageDescriptionField: "alt",
        // },
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
