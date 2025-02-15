import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({
  showBigGiveLink,
  showDanielFastLink,
}: {
  showDanielFastLink: any;
  showBigGiveLink: any;
}) {
  const pathname = usePathname();

  return (
    <nav className="links" aria-label="Main Navigation">
      <ul className="navDropdown">
        <li
          className={
            pathname.includes("about-love-first") || pathname === "/visit-us"
              ? "active"
              : ""
          }
        >
          <span className="desktopNavSpan" role="button" aria-haspopup>
            About ▾{" "}
          </span>
          <ul aria-label="About Love First">
            <li>
              <Link
                className={pathname === "/visit-us" ? "activeDropdownLink" : ""}
                href="/visit-us"
                aria-current={pathname === "/visit-us" ? "page" : undefined}
              >
                Visit Us
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/about-love-first" ? "activeDropdownLink" : ""
                }
                href="/about-love-first"
                aria-current={
                  pathname === "/about-love-first" ? "page" : undefined
                }
              >
                Our History
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/about-love-first/pastors"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/about-love-first/pastors"
                aria-current={
                  pathname === "/about-love-first/pastors" ? "page" : undefined
                }
              >
                Our Pastors
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={
            pathname.includes("connect") || pathname === "/fast" ? "active" : ""
          }
        >
          <span className="desktopNavSpan" role="button" aria-haspopup>
            Connect ▾
          </span>
          <ul aria-label="Connect with Us">
            <li>
              <Link
                className={pathname === "/connect" ? "activeDropdownLink" : ""}
                href="/connect"
                aria-current={pathname === "/connect" ? "page" : undefined}
              >
                All Groups
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/creative-arts"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/creative-arts"
                aria-current={
                  pathname === "/connect/creative-arts" ? "page" : undefined
                }
              >
                Creative Arts
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/love-groups"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/love-groups"
                aria-current={
                  pathname === "/connect/love-groups" ? "page" : undefined
                }
              >
                Love Groups
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/media-team" ? "activeDropdownLink" : ""
                }
                href="/connect/media-team"
                aria-current={
                  pathname === "/connect/media-team" ? "page" : undefined
                }
              >
                Media Team
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/ministries" ? "activeDropdownLink" : ""
                }
                href="/connect/ministries"
                aria-current={
                  pathname === "/connect/ministries" ? "page" : undefined
                }
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/service-volunteers"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/service-volunteers"
                aria-current={
                  pathname === "/connect/service-volunteers"
                    ? "page"
                    : undefined
                }
              >
                Service Volunteers
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/volunteer-army"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/volunteer-army"
                aria-current={
                  pathname === "/connect/volunteer-army" ? "page" : undefined
                }
              >
                Volunteer Army
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/ministries/254955"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/ministries/254955"
                aria-current={
                  pathname === "/connect/ministries/254955" ? "page" : undefined
                }
              >
                Youth Group
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/youth/158867"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/connect/youth/158867"
                aria-current={
                  pathname === "/connect/youth/158867" ? "page" : undefined
                }
              >
                Children&apos;s Ministry
              </Link>
            </li>

            {showDanielFastLink?.isActive && (
              <li>
                <Link
                  className={pathname === "/fast" ? "activeDropdownLink" : ""}
                  href="/fast"
                  aria-current={pathname === "/fast" ? "page" : undefined}
                >
                  Daniel Fast
                </Link>
              </li>
            )}
          </ul>
        </li>
        <li className={`online ${pathname.includes("events") ? "active" : ""}`}>
          <span className="desktopNavSpan" role="button" aria-haspopup>
            Events ▾{" "}
          </span>
          <ul aria-label="Upcoming Events">
            <li>
              <Link
                className={pathname === "/events" ? "activeDropdownLink" : ""}
                href="/events"
                aria-current={pathname === "/events" ? "page" : undefined}
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/events/calendar" ? "activeDropdownLink" : ""
                }
                href="/events/calendar"
                aria-current={
                  pathname === "/events/calendar" ? "page" : undefined
                }
              >
                Calendar
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`online ${pathname.includes("watch-online") ? "active" : ""}`}
        >
          <span className="desktopNavSpan" role="button" aria-haspopup>
            Online ▾{" "}
          </span>
          <ul aria-label="Watch Online">
            <li>
              <Link
                className={
                  pathname === "/watch-online" ? "activeDropdownLink" : ""
                }
                href="/watch-online"
                aria-current={pathname === "/watch-online" ? "page" : undefined}
              >
                Watch Online
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/watch-online/previous-sermons"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/watch-online/previous-sermons"
                aria-current={
                  pathname === "/watch-online/previous-sermons"
                    ? "page"
                    : undefined
                }
              >
                Previous Sermons
              </Link>
            </li>
          </ul>
        </li>
        <li className={pathname === "/prayer" ? "active" : ""}>
          <Link
            className="desktopNavSpan"
            href="/prayer"
            aria-current={pathname === "/prayer" ? "page" : undefined}
          >
            Prayer
          </Link>
        </li>
        <li
          className={["/giving", "/biggive"].includes(pathname) ? "active" : ""}
        >
          <span className="desktopNavSpan" role="button" aria-haspopup>
            Give ▾{" "}
          </span>
          <ul aria-label="Give Online">
            <li>
              <Link
                className={pathname === "/giving" ? "activeDropdownLink" : ""}
                href="/giving"
                aria-current={pathname === "/giving" ? "page" : undefined}
              >
                Give Online
              </Link>
            </li>
            {showBigGiveLink?.isActive && (
              <li>
                <Link
                  className={
                    pathname === "/biggive" ? "activeDropdownLink" : ""
                  }
                  href="/biggive"
                  aria-current={pathname === "/biggive" ? "page" : undefined}
                >
                  Big Give
                </Link>
              </li>
            )}
          </ul>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link
            className="desktopNavSpan"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
