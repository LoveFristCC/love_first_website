import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DateComponent from "@/app/(home)/date";
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

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: id,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function IndividualLoveGroups({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/27871/groups/${params.id}?include=location`;

  const eventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27871/events?include=group&filter=upcoming`;

  // const futureEventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27871/groups/${params.id}/events?filter=upcoming%2Cpublic&order=starts_at&per_page=3&include=location%2Cmy_rsvp`;

  const [loveGroups, loveGroupsEvents] = await Promise.all([
    await getPcData(url),
    await getPcData(eventsUrl),
  ]);
  // console.log("🚀 ~ loveGroupsEvents:", loveGroupsEvents.included);

  const groupName = loveGroups.data.attributes.name;
  const groupImage = loveGroups.data.attributes.header_image.original;
  const groupSchedule = loveGroups.data.attributes.schedule;
  const groupDescription = loveGroups.data.attributes.description;
  const groupEmail = loveGroups.data.attributes.contact_email;

  const location = loveGroups?.included[0]?.attributes;
  return (
    loveGroups && (
      <div className="individualContainer">
        <div>
          <h1>{groupName}</h1>
          <Image src={groupImage} alt={groupName} width={200} height={100} />
        </div>
        <div className="individualGroupCard">
          {groupEmail && (
            <p>
              <Link href={`mailto:${groupEmail}`}>Contact us</Link>
            </p>
          )}
          <div className="individualGroupContent">
            <div>
              <h2>About {groupName}</h2>
              {groupDescription && (
                <div
                  className="groupDescription"
                  dangerouslySetInnerHTML={{
                    __html: groupDescription,
                  }}
                />
              )}
            </div>
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
          </div>
        </div>
      </div>
    )
    // );
  );
}
