import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Service Volunteers - Love First",
    description:
      "Join our dedicated team of service volunteers at Love First and make a meaningful impact in our community. Discover fulfilling opportunities to serve others, grow spiritually, and foster connections with like-hearted individuals. Find your purpose through service and become a vital part of our compassionate community at Love First.",
  };
}

export default async function ServiceVolunteers() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/27873/groups?include=enrollment";
  const serviceVolunteers = await getPcData(url);

  return (
    <div className="groupsContainer">
      <section className="groupsHeroContainer">
        <div className="groupsBackground serviceVolunteers">
          <h1>Serve with Purpose</h1>
          <p>
            At Love First, we believe in the transformative power of service.
            Join our diverse community of volunteers who are passionate about
            making a positive impact. Whether you&apos;re interested in
            community outreach, event coordination, or supporting our
            church&apos;s mission, there&apos;s a place for you here.
          </p>
        </div>
      </section>
      <h2 className="connectionHeadline lg-subHeader">
        Join Our Volunteer Team and Make a Difference
      </h2>
      <section className="groupsList">
        {serviceVolunteers.data.map(
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
            const shouldShowGroupArray = serviceVolunteers.included.filter(
              (element: { id: string }) => element.id === el.id
            );

            const shouldShowGroup =
              shouldShowGroupArray[0]?.attributes?.status === "open";
            if (shouldShowGroup) {
              return (
                <Link
                  href={`/connect/service-volunteers/${el.id}`}
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
                    <p className="groupLinksContentHeader">
                      {el.attributes.name}
                    </p>
                    {el.attributes.schedule && (
                      <div>
                        <p className="timeAndWhere">When and where:</p>
                        <p className="schedule">{el.attributes.schedule}</p>
                      </div>
                    )}
                    <p>Join Today</p>
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
