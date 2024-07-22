import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;

export const seriesQuery = groq`*[_type == "seriesCollection"] {
  featuredVideo {
    title,
    speaker,
    serviceTitle,
    youtubeId
  },
  series[] {
    title,
    route,
    seriesImage,
    youtubeVideos[] {
      title,
      speaker,
      youtubeId
    }
  }
}`;

export const leadershipQuery = `{
  "pastors": *[_type == "leaders" && role == "pastor"] | order(order asc) {
    name,
    email,
    pastorTitle,
    picture,
    order
  },
  "ministers": *[_type == "leaders" && role == "minister"] | order(order asc) {
    name,
    email,
    pastorTitle,
    picture,
    order
  },
  "staff": *[_type == "leaders" && role == "staff"] | order(order asc) {
    name,
    email,
    pastorTitle,
    picture,
    order
  }
}`;
