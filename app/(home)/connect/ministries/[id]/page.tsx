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

export default async function IndividualMinistries({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.planningcenteronline.com/groups/v2/group_types/27876/groups/${params.id}`;

  const eventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27876/groups/${params.id}/events?filter=past%2Cpublic&order=-starts_at&per_page=3&include=location%2Cmy_rsvp`;

  // const futureEventsUrl = `https://api.planningcenteronline.com/groups/v2/group_types/27871/groups/${params.id}/events?filter=upcoming%2Cpublic&order=starts_at&per_page=3&include=location%2Cmy_rsvp`;

  // const loveGroups = await getPcData(url);
  // const loveGroupsPastEvents = await getPcData(pastEventsUrl);
  // const loveGroupsFutureEvents = await getPcData(pastEventsUrl);
  const [loveGroups, loveGroupsEvents] = await Promise.all([
    await getPcData(url),
    await getPcData(eventsUrl),
    // await getPcData(futureEventsUrl),
  ]);

  const groupName = loveGroups.data.attributes.name;
  const groupImage = loveGroups.data.attributes.header_image.original;
  console.log(
    "🚀 ~ loveGroups.data.attributes.header_image:",
    loveGroups.data.attributes.header_image
  );
  const groupSchedule = loveGroups.data.attributes.schedule;
  const groupDescription = loveGroups.data.attributes.description;
  const groupEmail = loveGroups.data.attributes.contact_email;
  return (
    <div>
      {loveGroups && (
        <div>
          <Image src={groupImage} alt={groupName} width={200} height={100} />
          <div className="groupContent">
            <h2>{groupName}</h2>
            <p>{groupSchedule}</p>

            {groupEmail && (
              <Link href={`mailto:${groupEmail}`}>contact us</Link>
            )}

            {groupDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: groupDescription,
                }}
              />
            )}

            {loveGroupsEvents.data.map(
              (
                el: {
                  attributes: {
                    name: string;
                    description: string;
                    starts_at: string;
                  };
                },
                key: number
              ) => {
                const date = new Date(el.attributes.starts_at);
                const easternTime = date.toLocaleString("en-US", {
                  timeZone: "America/New_York",
                });
                return (
                  <div key={key}>
                    <h3>{el.attributes.name}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: el.attributes.description,
                      }}
                    />
                    {easternTime && (
                      <>
                        <p>Time</p>
                        <p>{easternTime}</p>
                      </>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
