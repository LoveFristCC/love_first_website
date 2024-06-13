import Link from "next/link";
import Image from "next/image";
import { getPcData } from "@/app/lib/getPcData";

export default async function VolunteerArmy() {
  const url =
    "https://api.planningcenteronline.com/groups/v2/group_types/80944/groups?filter=enrollment&enrollment=open_signup%2Crequest_to_join&per_page=42&include=location";
  const VolunteerArmy = await getPcData(url);
  console.log("🚀 ~ VolunteerArmy:", VolunteerArmy);

  return (
    <div className="VolunteerArmyContainer">
      {VolunteerArmy.data.map(
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
          console.log(el);
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
                  href={`/connect/volunteer-army/${el.id}`}
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
