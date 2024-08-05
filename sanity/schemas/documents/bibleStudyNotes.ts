import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "bibleStudyNotes",
  title: "Bible Study Notes",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Study Plan Date",
      type: "string",
      validation: (Rule) => Rule.required().error("Plan is required."),
    }),
    defineField({
      name: "studyNotes",
      title: "Bible Study Notes",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      const maxFields = 8;
      // @ts-ignore
      if (fields?.length > maxFields) {
        return `You can only have up to ${maxFields} bible study notes. Please remove some notes.`;
      }
      return true;
    }),
});
