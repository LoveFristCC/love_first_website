import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
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
    // | "Life University"
    | "Ministries"
    | "Service Volunteers"
    | "Children and Teens Ministry Volunteers"
    | "Creative Arts Team"
    | "Volunteer Army"
    | "Theatrical Ministry"
    // | "Virtual Groups"
    | "Media Team";

  // Define the object with the specific keys

  const urlMap: { [key in GroupKeys]: string } = {
    "Love Groups": "/connect/love-groups",
    // "Life University": "/connect/life-university",
    Ministries: "/connect/ministries",
    "Service Volunteers": "/connect/service-volunteers",
    "Children and Teens Ministry Volunteers": "/connect/youth",
    "Creative Arts Team": "/connect/creative-arts",
    "Volunteer Army": "/connect/volunteer-army",
    "Theatrical Ministry": "/connect/theatrical-ministry",
    // "Virtual Groups": "/connect/virtual-groups",
    "Media Team": "/connect/media-team",
  };

  const isGroupKey = (key: string): key is GroupKeys => {
    return key in urlMap;
  };

  return (
    <div className="connectContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          className="connectHeaderPath"
          fillOpacity="1"
          d="M0,160L480,144L960,144L1440,80L1440,0L960,0L480,0L0,0Z"
        ></path>
      </svg>
      <section className="connectHeroContainer">
        <h1>Connect and Serve with Love First Today</h1>
        <p>
          Looking to find a supportive community and make a difference? Join our
          church family today! At Love First, we believe in the power of
          connection and service. Whether you&apos;re seeking fellowship,
          spiritual growth, or opportunities to volunteer, we have a place for
          you. Connect with like-minded individuals, participate in meaningful
          activities, and contribute to our mission of spreading love and
          kindness. Discover the joy of serving and being part of something
          greater. Everyone is welcome—come as you are and grow with us!
        </p>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          className="connectHeaderPath"
          fillOpacity="1"
          d="M0,160L480,144L960,144L1440,80L1440,160L960,160L480,160L0,160Z"
        ></path>
      </svg>
      <section className="connectionGroups">
        {groups?.data?.map(
          (
            el: { attributes: { name: string; description: string } },
            key: number
          ) => {
            const groupKey = el.attributes.name;
            const url = isGroupKey(groupKey) ? urlMap[groupKey] : "";

            return (
              <div className="groupCards" key={key}>
                <Image
                  src="/media.webp"
                  alt={el.attributes.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <div className="groupContent">
                  <h2>{el.attributes.name}</h2>

                  <p>{el.attributes.description}</p>

                  <Link href={url} className="groupLinks">
                    Find Out How You Can Get Involved
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </section>
    </div>
  );
}
