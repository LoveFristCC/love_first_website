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
    title: "Media Team - Love First",
    description:
      "Use your media skills to make a difference at Love First. Join our Media Team and help spread love and positivity through creative content.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: `https://www.lfcc.tv/connect/media-team`,
    },
  };
}

export default async function Media() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/260323/groups?include=enrollment";
  const media = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground media">
          <h1>Join the Media Team at Love First</h1>
          <p>
            At Love First, our Media Team plays a crucial role in spreading our
            message of love and hope through creative and impactful content. If
            you have a passion for media and a desire to make a difference, we
            invite you to join us.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Explore Opportunities to Create and Inspire
      </h2>
      <section className="groupsList smallerListMedia">
        {media.data.map(
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
            const shouldShowGroupArray = media.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/media-team/${el.id}`}
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
