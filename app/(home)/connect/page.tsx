import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPcData } from "@/app/lib/getPcData";
import "./connect.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Connection Opportunities - Love First",
    description:
      "Explore a variety of connection opportunities at Love First. Our community offers numerous ways for you to get involved, build meaningful relationships, and grow in your faith. From volunteer programs and small group gatherings to worship services and special events, there's something for everyone. Join Love First today and discover how you can connect and serve with love in a welcoming and inclusive environment.",
  };
}

export default async function Connect() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types?filter=church_center_visible";
  const groups = await getPcData(url);

  type GroupKeys =
    | "Love Groups"
    | "Ministries"
    | "Service Volunteers"
    | "Children and Teens Ministry Volunteers"
    | "Creative Arts Team"
    | "Volunteer Army"
    | "Theatrical Ministry"
    | "Media Team";

  const urlMap: { [key in GroupKeys]: string } = {
    "Love Groups": "/connect/love-groups",
    Ministries: "/connect/ministries",
    "Service Volunteers": "/connect/service-volunteers",
    "Children and Teens Ministry Volunteers": "/connect/youth",
    "Creative Arts Team": "/connect/creative-arts",
    "Volunteer Army": "/connect/volunteer-army",
    "Theatrical Ministry": "/connect/theatrical-ministry",
    "Media Team": "/connect/media-team",
  };

  const imageMap: { [key in GroupKeys]: string } = {
    "Love Groups": "/loveGroups.webp",
    Ministries: "/ministries.webp",
    "Service Volunteers": "/serviceVolunteers.webp",
    "Children and Teens Ministry Volunteers": "/teens.webp",
    "Creative Arts Team": "/creativeArts.webp",
    "Volunteer Army": "/volunteers.webp",
    "Theatrical Ministry": "/ministries.webp",
    "Media Team": "/media.webp",
  };

  const isGroupKey = (key: string): key is GroupKeys => {
    return key in urlMap;
  };

  return (
    <div className="connectContainer">
      <section className="connectHeroContainer">
        <div className="heroBackground">
          <h1>Discover Connection Opportunities at Love First</h1>
          <p>
            At Love First, we believe in the power of community and the
            importance of building strong, meaningful relationships. Whether
            you&apos;re looking to volunteer, join a small group, or participate
            in our creative arts team, there&apos;s a place for you here.
            Explore our various connection opportunities and find out how you
            can get involved today.
          </p>
        </div>
      </section>

      <h2 className="connectionHeadline">
        Join Our Community and Grow in Faith and Fellowship
      </h2>
      <section className="connectionGroups">
        {groups?.data?.map(
          (
            el: { attributes: { name: string; description: string } },
            key: number
          ) => {
            const groupKey = el.attributes.name;
            const url = isGroupKey(groupKey) ? urlMap[groupKey] : "";
            const imageSrc = isGroupKey(groupKey)
              ? imageMap[groupKey]
              : "/images/default.webp";

            return (
              <Link href={url} className="groupCards" key={key}>
                <Image
                  src={imageSrc}
                  alt={el.attributes.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <div className="groupContent">
                  <p className="groupContentHeader">{el.attributes.name}</p>
                  <p>{el.attributes.description}</p>
                  <p className="ctaText">Discover More</p>
                </div>
              </Link>
            );
          }
        )}
      </section>
    </div>
  );
}
