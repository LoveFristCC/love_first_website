import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getPcData } from "@/app/lib/getPcData";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Love Groups - Love First",
    description:
      "Join our Love Groups at Love First to build stronger connections within our community. Experience spiritual growth, fellowship, and support through small group gatherings. Sign up today!",
  };
}

export default async function LoveGroups() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/27871/groups?include=enrollment";

  const loveGroups = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground loveGroups">
          <h1>Build Stronger Connections at Love First</h1>
          <p>
            Discover the joy of deeper relationships and spiritual growth by
            joining our Love Groups. These small, supportive gatherings are
            designed to help you connect with others, share your faith journey,
            and strengthen your relationship with God. Whether you&apos;re new
            to our church or have been with us for years, there&apos;s a Love
            Group for everyone.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Join Our Love Groups and Experience Deep, Meaningful Relationships
      </h2>
      <section className="groupsList">
        {loveGroups.data.map(
          (
            el: {
              id: string;
              attributes: {
                name: string;
                schedule: string;
                header_image: { original: string };
              };
            },
            key: number
          ) => {
            const shouldShowGroupArray = loveGroups.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";

            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/love-groups/${el.id}`}
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
