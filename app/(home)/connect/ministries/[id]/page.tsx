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
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/27876/groups/${id}?include=location`;
  const data = await getPcData(url);
  const groupName = data.data.attributes.name;
  const groupImage = data.data.attributes.header_image.original;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${groupName} - Love First`,
    description: "",
    openGraph: {
      images: [groupImage, ...previousImages],
    },
  };
}

export default async function IndividualMinistries({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/27876/groups/${params.id}?include=location`;

  const eventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27876/events?include=group&filter=upcoming`;

  // const futureEventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27871/groups/${params.id}/events?filter=upcoming%2Cpublic&order=starts_at&per_page=3&include=location%2Cmy_rsvp`;

  const [groups, groupsEvents] = await Promise.all([
    await getPcData(url),
    await getPcData(eventsUrl),
  ]);

  const groupName = groups.data.attributes.name;
  const groupImage = groups.data.attributes.header_image.original;
  const groupSchedule = groups.data.attributes.schedule;
  const groupDescription = groups.data.attributes.description;
  const groupEmail = groups.data.attributes.contact_email;

  const location = groups?.included[0]?.attributes;
  return (
    groups && (
      <div className="individualContainer">
        <div className="individualHeroHeader">
          <h1>{groupName}</h1>
        </div>
        <div className="individualGroupCard">
          <Image src={groupImage} alt={groupName} width={200} height={100} />
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
                <h4>Location</h4>
                <p>{location.name}</p>
                <p>{location.full_formatted_address}</p>
              </div>
            )}

            {groupEmail && (
              <div>
                <p>
                  <Link href={`mailto:${groupEmail}`}>Contact us</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
    // );
  );
}
