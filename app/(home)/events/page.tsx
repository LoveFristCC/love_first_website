import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { eventsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Upcoming Events & Life Classes - Love First Christian Center",
    description:
      "Explore upcoming events and Life University classes at Love First Christian Center. Stay connected and engaged with our community. Discover how you can participate and make a difference.",
  };
}

export default async function Events() {
  const [events] = await Promise.all([
    sanityFetch<any>({
      query: eventsQuery,
    }),
  ]);
  return (
    <div>
      <section className="eventHero">
        <div className="eventHeaderContent">
          <h1>Upcoming Events at Love First Christian Center</h1>
          <p>
            Stay updated with all our upcoming events and Life Classes here at
            Love First Christian Center. Join us and be a part of our community!
          </p>
        </div>
        <Image
          src="/eventsHeader.webp"
          alt="Events at Love First"
          layout="fill"
          objectFit="cover"
          priority
        />
      </section>
      <section className="lifeSection">
        <div className="lifeContent">
          <h2>Events and Life University Classes</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hac hendrerit
            aptent arcu facilisis tempor. Facilisis est praesent semper fames
            volutpat porttitor suspendisse. Nibh tortor dictum laoreet; tempus
            vestibulum faucibus scelerisque? Phasellus conubia montes convallis
            proin condimentum aptent rutrum dis. Cras enim ad metus; conubia
            dolor montes tellus justo. Lacinia ultricies molestie vehicula
            pretium eros feugiat sagittis id.
          </p>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hac hendrerit
            aptent arcu facilisis tempor. Facilisis est praesent semper fames
            volutpat porttitor suspendisse. Nibh tortor dictum laoreet; tempus
            vestibulum faucibus scelerisque? Phasellus conubia montes convallis
            proin condimentum aptent rutrum dis. Cras enim ad metus; conubia
            dolor montes tellus justo. Lacinia ultricies molestie vehicula
            pretium eros feugiat sagittis id.
          </p>
          <Link
            href="https://lovefirst.churchcenter.com/registrations/events"
            rel="noreferrer noopener"
            target="_blank"
          >
            Register for an Upcoming Events at Love First
          </Link>
        </div>
        <div className="lifeUniversityImageContainer">
          <Image
            src="/Life-U-Banner.webp"
            alt="Life University Classes"
            height={600}
            width={600}
          />
        </div>
      </section>
      <section className="individualEventSection">
        <h2>Current and Upcoming Events</h2>
        {events &&
          events.map(
            (
              el: { eventImage: string; name: string; description: string },
              i: number
            ) => {
              const imageUrl = urlForImage(el.eventImage)
                ?.height(1000)
                .width(1000)
                .url();

              return (
                <div className="individualEventContainer" key={i}>
                  <div className="individualEventImageContainer">
                    <Image
                      src={imageUrl as string}
                      alt={`${el.name} - Love First Event`}
                      // layout="responsive"
                      width={500}
                      height={500}
                      // objectFit="cover"
                    />
                  </div>
                  <div className="individualEventContent">
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <Link
                      href="https://lovefirst.churchcenter.com/registrations/events"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              );
            }
          )}
      </section>
    </div>
  );
}
