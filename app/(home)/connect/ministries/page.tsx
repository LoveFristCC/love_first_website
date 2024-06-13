import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";

export default async function Ministries() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/27876/groups?filter=enrollment&enrollment=open_signup%2Crequest_to_join&per_page=42&include=location";
  const ministries = await getPcData(url);

  return (
    <div className="ministriesContainer">
      {ministries.data.map(
        (
          el: {
            id: string;
            attributes: {
              name: string;
              schedule: string;
              header_image: { medium: string };
            };
          },
          key: number
        ) => {
          return (
            <div key={key}>
              <Image
                src={el.attributes.header_image.medium}
                alt={el.attributes.name}
                width={200}
                height={100}
              />
              <div className="groupContent">
                <h2>{el.attributes.name}</h2>

                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: el.attributes.description,
                  }}
                /> */}

                <p>{el.attributes.schedule}</p>

                <Link
                  href={`/connect/ministries/${el.id}`}
                  className="groupLinks"
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
