import Link from "next/link";
import Image from "next/image";

export default function GroupCard({
  groupImage,
  groupName,
  groupDescription,
  groupSchedule,
  location,
  groupEmail,
  redirectLink,
}: {
  groupImage: string;
  groupName: string;
  groupDescription: string;
  groupSchedule: string;
  location: {
    name: string;
    full_formatted_address: string;
  };
  groupEmail: string;
  redirectLink: string;
}) {
  return (
    <div className="individualGroupCard">
      <Image src={groupImage} alt={groupName} width={200} height={200} />
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

        {groupEmail && (
          <div>
            <p>
              <Link href={`mailto:${groupEmail}`}>Contact us</Link>
              <Link
                href={redirectLink}
                rel="noreferrer noopener"
                target="_blank"
                aria-label={`Join group ${groupName}`}
              >
                Request to Join
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
