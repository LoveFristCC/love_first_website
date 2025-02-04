import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import { sanityFetch } from "@/sanity/lib/fetch";
import { childrenMinistryHighlightsQuery } from "@/sanity/lib/queries";
import MinistryHighlights from "@/components/ministryHighlights/MinistryHighlight";
import ChildrenLessonPlans from "@/components/ministryHighlights/ChildrenLessonPlans";
import GroupCard from "./groupCard";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/30699/groups/${id}?include=location`;
  const data = await getPcData(url);
  const groupName = data.data.attributes.name;
  const groupImage = data.data.attributes.header_image.original;

  const previousImages = (await parent).openGraph?.images || [];
  const siteName = "Love First Christian Center";

  return {
    title: `${groupName} - Love First`,
    description: `Join our ${groupName} community at Love First Christian Center. Connect, grow, and engage with others. We can't wait to welcome you`,
    openGraph: {
      siteName: siteName,
      images: [groupImage, ...previousImages],
      url: `https://www.lfcc.tv/connect/youth/${id}`,
    },
    alternates: {
      canonical: `https://www.lfcc.tv/connect/youth/${id}`,
    },
  };
}

export default async function IndividualOutreach({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/30699/groups/${params.id}?include=location`;
  const nurseryUrl = `https://api.planningcenteronline.com/groups/v2/group_types/30699/groups/158735?include=location`;

  const promises = [getPcData(url)];

  if (params?.id == "158867") {
    promises.push(
      sanityFetch<any>({
        query: childrenMinistryHighlightsQuery,
      }),
      getPcData(nurseryUrl)
    );
  }

  const [groups, highlightData, nurseryData] = await Promise.all(promises);

  const groupName = groups?.data?.attributes.name;
  const groupImage =
    groups?.data?.attributes?.header_image.original ||
    groups?.data?.attributes?.header_image.medium;
  const groupSchedule = groups?.data?.attributes?.schedule;
  const groupDescription = groups?.data?.attributes?.description;
  const groupEmail = groups?.data?.attributes?.contact_email;
  const redirectLink = groups?.data.attributes.public_church_center_web_url;
  const location = groups?.included[0]?.attributes;

  const nurseryName = nurseryData?.data?.attributes.name;
  const nurseryImage =
    nurseryData?.data?.attributes?.header_image.original ||
    nurseryData?.data?.attributes?.header_image.medium;
  const nurserySchedule = nurseryData?.data?.attributes?.schedule;
  const nurseryDescription = nurseryData?.data?.attributes?.description;
  const nurseryEmail = nurseryData?.data?.attributes?.contact_email;
  const nurseryLink = nurseryData?.data.attributes.public_church_center_web_url;
  const nurseryLocation = nurseryData?.included[0]?.attributes;

  return (
    groups && (
      <div className="individualContainer">
        {params?.id == "158867" ? (
          <section className="groupsHeroContainer">
            <div className="groupsBackground children">
              <h1>{groupName}</h1>
            </div>
          </section>
        ) : (
          <div className="individualHeroHeader">
            <div className="individualHeroHeaderContent">
              <div className="altLogoContainer">
                <Image
                  src="/loveFirstAltLogo.webp"
                  alt="Love First Christian Center"
                  width={600}
                  height={300}
                  priority
                />
              </div>
              <h1>{groupName}</h1>
            </div>
          </div>
        )}

        {params?.id == "158867" ? (
          <div className="nurseryKidsContainer">
            {" "}
            <GroupCard
              groupImage={nurseryImage}
              groupDescription={nurseryDescription}
              groupName={nurseryName}
              groupSchedule={nurserySchedule}
              location={nurseryLocation}
              groupEmail={nurseryEmail}
              redirectLink={nurseryLink}
            />
            <GroupCard
              groupImage={groupImage}
              groupDescription={groupDescription}
              groupName={groupName}
              groupSchedule={groupSchedule}
              location={location}
              groupEmail={groupEmail}
              redirectLink={redirectLink}
            />
          </div>
        ) : (
          <GroupCard
            groupImage={groupImage}
            groupDescription={groupDescription}
            groupName={groupName}
            groupSchedule={groupSchedule}
            location={location}
            groupEmail={groupEmail}
            redirectLink={redirectLink}
          />
        )}

        {params?.id == "158867" && highlightData?.childrenMinistryEvents[0] && (
          <MinistryHighlights
            highlightData={highlightData?.childrenMinistryEvents[0]}
          />
        )}
        {params?.id == "158867" && highlightData?.childrenLessons[0] && (
          <ChildrenLessonPlans lessonPlans={highlightData?.childrenLessons} />
        )}
      </div>
    )
  );
}
