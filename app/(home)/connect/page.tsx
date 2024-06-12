import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getPcData } from "@/app/lib/getPcData";
import "./connect.css";

export default async function Connect() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types?filter=church_center_visible";
  const groups = await getPcData(url);
  const { data } = groups;
  console.log("🚀 ~ data:", data);

  type GroupKeys =
    | "Love Groups"
    | "Life University"
    | "Ministries"
    | "Service Volunteers"
    | "Children and Teens Ministry Volunteers"
    | "Creative Arts Team"
    | "Volunteer Army"
    | "Theatrical Ministry"
    | "Virtual Groups"
    | "Media Team";

  // Define the object with the specific keys

  const urlMap: { [key in GroupKeys]: string } = {
    "Love Groups": "/connect/love-groups",
    "Life University": "/connect/life-university",
    Ministries: "/connect/ministries",
    "Service Volunteers": "/connect/service-volunteers",
    "Children and Teens Ministry Volunteers": "/connect/youth",
    "Creative Arts Team": "/connect/creative-arts",
    "Volunteer Army": "/connect/volunteer-army",
    "Theatrical Ministry": "/connect/theatrical-ministry",
    "Virtual Groups": "/connect/virtual-groups",
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
          fill-opacity="1"
          d="M0,160L480,144L960,144L1440,80L1440,0L960,0L480,0L0,0Z"
        ></path>
      </svg>
      <section className="ConnectHeroContainer">
        <h1>Join Our Community: Connect and Serve with Love First Today</h1>
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
          fill-opacity="1"
          d="M0,160L480,144L960,144L1440,80L1440,160L960,160L480,160L0,160Z"
        ></path>
      </svg>
      <section className="connectionGroups">
        {data.map(
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
                  height={200}
                  width={400}
                  className="groupImages"
                />
                <div className="groupContent">
                  <h2>{el.attributes.name}</h2>
                  <div>
                    <p>{el.attributes.description}</p>
                  </div>

                  <Link href={url}>Learn More</Link>
                </div>
              </div>
            );
          }
        )}
      </section>
    </div>
  );
}
