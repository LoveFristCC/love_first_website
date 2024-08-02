import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "childrenBibleStudy",
  title: "Children Bible Study",
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
      name: "leaderLesson",
      title: "Leader Lesson",
      type: "file",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "parentLesson",
      title: "ParentLesson",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "lessonActivity",
      title: "Lesson Activity",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
  ],
});
