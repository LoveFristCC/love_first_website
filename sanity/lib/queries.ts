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

export const youtubeSeries = groq`*[_type == "youtubeSermons"] | order(_createdAt desc) [0...6] {
  title,
  route,
  seriesImage,
  youtubeVideos[]{
    sermoneTitle,
    speaker,
    youtubeId
  }
}`;

export const individualYoutubeSeries = groq`*[_type == "youtubeSermons" && route == $slug][0] {
  title,
  route,
  seriesImage,
  youtubeVideos[]{
    sermoneTitle,
    speaker,
    youtubeId
  }
}`;

export const eventsQuery = groq`*[_type == "events" && isActive == true] | order(order asc) {
  name,
  description,
  order,
  eventImage,
  redirectUrl
}`;

export const teenMinistryHighlightsQuery = groq`
  *[_type == "teenMinistryEvents"] {
    title,
    description,
    eventImages
  }
`;

export const bibleStudyNotes = groq`
*[_type == "bibleStudyNotes"] | order(_createdAt desc) [0..7] {
  _id,
  title,
  studyNotes {
  "notes": asset->url
  },
  _createdAt
}
`;
export const childrenMinistryHighlightsQuery = groq`
{
"childrenLessons": *[_type == "childrenBibleStudy"] | order(_createdAt desc) [0...3] {
  title,
  leaderLesson {
    "file": asset->url
  },
  parentLesson {
    "file": asset->url
  },
  lessonActivity {
    "file": asset->url
  }
},
"childrenMinistryEvents": *[_type == "childrenMinistryEvents"] {
    title,
    description,
    eventImages
  }
}
`;

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
