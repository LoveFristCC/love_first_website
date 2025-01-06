import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "pdf",
  type: "document",
  icon: UserIcon,
  title: "Misc Uploads",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "file",
      type: "file",
      title: "PDF File",
      description: "Upload the PDF file",
      options: {
        accept: ".pdf",
      },
    }),
  ],
});
