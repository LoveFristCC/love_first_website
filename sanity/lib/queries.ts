import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

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

export const allYoutubeSeries = groq`*[_type == "youtubeSermons"] | order(_createdAt desc) {
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

export const redirect = groq`*[_type == "redirects"] {
  title,
  redirectUrl
}`;

export const alertMessage = groq`*[_type == "alertMessage"]{
  title,
  redirectUrl,
  buttonText,
  isActive
}`;

export const seasonalPages = groq`*[_type == "seasonalPages"]{
  title,
  isActive
}`;

export const danielFast = groq`*[_type == "danielFastContent"]{
  title,
  subtitle,
  redirectUrl,
  fastingGuide {
  "URL": asset->url
  }
}`;
