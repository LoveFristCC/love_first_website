import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Volunteer Army - Love First",
    description:
      "Join the Volunteer Army and make a difference! Explore diverse opportunities to contribute, connect, and grow through impactful volunteer work. Be a part of something greater.",
  };
}

export default async function VolunteerArmy() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/80944/groups?include=enrollment";
  const volunteerArmy = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground volunteerArmy">
          <h1>Join the Volunteer Army and Make a Difference</h1>
          <p>
            Welcome to the Volunteer Army, where every helping hand contributes
            to a better world. Our mission is to mobilize a dedicated team of
            volunteers to address community needs, support various causes, and
            foster a spirit of service and unity.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Be Part of a Community Committed to Positive Change
      </h2>
      <section className="groupsList smallerList">
        {volunteerArmy.data.map(
          (
            el: {
              id: string;
              attributes: {
                name: string;
                schedule: string;
                church_center_visible: boolean;
                header_image: { original: string };
              };
            },
            key: number
          ) => {
            const shouldShowGroupArray = volunteerArmy.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/volunteer-army/${el.id}`}
                  className="groupLinks"
                  key={key}
                >
                  <Image
                    src={el.attributes.header_image.original}
                    alt={el.attributes.name}
                    width={400}
                    height={200}
                    className="groupLinksImage"
                  />
                  <div className="groupLinksContent">
                    <h3 className="groupLinksContentHeader">
                      {el.attributes.name}
                    </h3>
                    {el.attributes.schedule && (
                      <div>
                        <p className="timeAndWhere">When and where:</p>
                        <p className="schedule">{el.attributes.schedule}</p>
                      </div>
                    )}
                    <p className="groupCtaText">Join Today →</p>
                  </div>
                </Link>
              );
            }
          }
        )}
      </section>
    </div>
  );
}
