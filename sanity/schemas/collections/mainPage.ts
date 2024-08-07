import { defineField, defineType } from "sanity";

export default defineType({
  name: "seriesCollection",
  title: "Sermon youtube videos",
  type: "document",
  fields: [
    defineField({
      name: "featuredVideo",
      title: "Featured Video",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Series Title",
          type: "string",
          description: "Title of the series of the featured video",
        }),
        defineField({
          name: "speaker",
          title: "Speaker",
          type: "string",
          description: "Speaker for the featured video",
        }),
        defineField({
          name: "serviceTitle",
          title: "Service Title",
          type: "string",
          description: "Title of the service",
        }),
        defineField({
          name: "youtubeId",
          title: "Youtube Id",
          type: "string",
          description: "URL of the featured video",
          validation: (rule) => rule.required(),
        }),
      ],
      description: "Details of the featured video",
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "The title of the series",
            }),
            defineField({
              name: "route",
              title: "Url Route",
              type: "string",
              description: "Url Route on Website",
            }),
            defineField({
              name: "seriesImage",
              title: "Series Image",
              type: "image",
              description: "An image representing the series",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "youtubeVideos",
              title: "YouTube Videos",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      description: "Title of the YouTube video",
                    }),
                    defineField({
                      name: "speaker",
                      title: "Speaker",
                      type: "string",
                      description: "Speaker for the service",
                    }),
                    defineField({
                      name: "youtubeId",
                      title: "Youtube Id",
                      type: "string",
                      description: "URL of the featured video",
                      validation: (rule) => rule.required(),
                    }),
                  ],
                },
              ],
              description: "An array of YouTube videos related to the series",
            }),
          ],
        },
      ],
      description:
        "A collection of series, each with an array of YouTube videos",
    }),
  ],
});
