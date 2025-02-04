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
    title: "Ministries - Love First",
    description:
      "Discover diverse ministries at Love First. From youth programs to outreach, find your place to grow and serve in our faith-based community.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: `https://www.lfcc.tv/connect/ministries`,
    },
    alternates: {
      canonical: `https://www.lfcc.tv/connect/ministries`,
    },
  };
}

export default async function Ministries() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/27876/groups?include=enrollment";
  const ministries = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground ministries">
          <h1>Discover Our Ministries at Love First</h1>
          <p>
            At Love First, our ministries are the heartbeat of our community,
            providing a variety of ways for individuals to connect, serve, and
            grow in their faith. Whether you are looking to volunteer your time,
            deepen your spiritual journey, or support others, there is a place
            for you in our ministries.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Engage, Serve, and Grow with Love First Ministries
      </h2>
      <section className="groupsList">
        {ministries.data.map(
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
            const shouldShowGroupArray = ministries.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/ministries/${el.id}`}
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
