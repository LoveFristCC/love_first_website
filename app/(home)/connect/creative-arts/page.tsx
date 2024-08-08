import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Creative Arts - Love First",
    description:
      "Explore creative arts at Love First. Experience faith through music, visual arts, drama, and more. Join us in celebrating creativity and spirituality.",
  };
}

export default async function CreativeArts() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/30700/groups?include=enrollment";
  const creativeArts = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground creativeArts">
          <h1>Experience the Spirit of Creative Arts at Love First</h1>
          <p>
            Immerse yourself in the vibrant world of creative expression at Love
            First. Our creative arts programs are designed to inspire and
            uplift, offering opportunities to explore music, visual arts, drama,
            and more. Whether you&apos;re an artist or simply appreciate the
            arts, join us in celebrating spirituality through creativity.
            Discover upcoming events, workshops, and how you can get involved in
            our welcoming community.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Discover Our Creative Arts Programs and Events
      </h2>
      <section className="groupsList smallerList">
        {creativeArts.data.map(
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
            const shouldShowGroupArray = creativeArts.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/creative-arts/${el.id}`}
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
