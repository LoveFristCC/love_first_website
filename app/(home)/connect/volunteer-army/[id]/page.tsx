import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";

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
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/80944/groups/${id}?include=location`;
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
      url: `https://www.lfcc.tv/connect/volunteer-army/${id}`,
    },
    alternates: {
      canonical: `https://www.lfcc.tv/connect/volunteer-army/${id}`,
    },
  };
}

export default async function IndividualVolunteerArmyPage({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/80944/groups/${params.id}?include=location`;

  const [groups] = await Promise.all([await getPcData(url)]);

  const groupName = groups?.data?.attributes.name;
  const groupImage =
    groups?.data?.attributes?.header_image.original ||
    groups?.data?.attributes?.header_image.medium;
  const groupSchedule = groups?.data?.attributes?.schedule;
  const groupDescription = groups?.data?.attributes?.description;
  const groupEmail = groups?.data?.attributes?.contact_email;
  const redirectLink = groups?.data.attributes.public_church_center_web_url;

  const location = groups?.included[0]?.attributes;
  return (
    groups && (
      <div className="individualContainer">
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
        <div className="individualGroupCard">
          <Image src={groupImage} alt={groupName} width={500} height={500} />
          <div className="individualGroupContent">
            {groupDescription && (
              <div>
                <h2>About {groupName}</h2>
                <div
                  className="groupDescription"
                  dangerouslySetInnerHTML={{
                    __html: groupDescription,
                  }}
                />
              </div>
            )}
            {groupSchedule && (
              <div>
                <h3>Schedule</h3>
                <p>{groupSchedule}</p>
              </div>
            )}

            {location && (
              <div>
                <h3>Location</h3>
                <p>{location.name}</p>
                <p>{location.full_formatted_address}</p>
              </div>
            )}

            <div>
              <p>
                {groupEmail && (
                  <Link href={`mailto:${groupEmail}`}>Contact us</Link>
                )}
              </p>
              <p>
                {redirectLink && (
                  <Link
                    href={redirectLink}
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label={`Join group ${groupName}`}
                  >
                    Register to Join
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
