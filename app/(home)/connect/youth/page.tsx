import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  const siteName = "Love First Christian Center";
  return {
    title: "Youth Ministry Volunteers - Love First",
    description:
      "Join Love First’s Youth Ministry volunteers. Make an impact by nurturing faith and community through your time and talents.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/connect/youth",
    },
  };
}

export default async function Youth() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/30699/groups?include=enrollment";
  const youth = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground youth">
          <h1>Youth Ministry Volunteers at Love First</h1>
          <p>
            Love First relies on dedicated volunteers to support our Youth
            Ministry efforts. By volunteering, you can play a vital role in
            nurturing the faith, community, and service of young people in our
            community.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Making a Difference in Young Lives
      </h2>
      <section className="groupsList smallerListMedia">
        {youth.data.map(
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
            const shouldShowGroupArray = youth.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/youth/${el.id}`}
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
