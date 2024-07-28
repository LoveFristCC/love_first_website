import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="links">
      <ul className="navDropdown">
        <li className={pathname.includes("about-love-first") ? "active" : ""}>
          <span className="desktopNavSpan">About ▼ </span>
          <ul>
            <li>
              <Link
                className={
                  pathname === "/about-love-first" ? "activeDropdownLink" : ""
                }
                href="/about-love-first"
              >
                Our History
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/about-love-first/location"
                    ? "activeDropdownLink"
                    : ""
                }
                href="/about-love-first/location"
              >
                Location
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
              >
                Our Pastors
              </Link>
            </li>
          </ul>
        </li>
        <li className={pathname.includes("connect") ? "active" : ""}>
          <span className="desktopNavSpan">Connect ▼</span>
          <ul className="navDropdown">
            <li>
              <Link
                className={pathname === "/connect" ? "activeDropdownLink" : ""}
                href="/connect"
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
              >
                Volunteer Army
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/connect/youth" ? "activeDropdownLink" : ""
                }
                href="/connect/youth"
              >
                Youth Group
              </Link>
            </li>
          </ul>
        </li>
        <li className={pathname === "/prayer" ? "active" : ""}>
          <Link className="desktopNavSpan" href="/prayer">
            Prayer
          </Link>
        </li>
        <li className={pathname === "/give" ? "active" : "desktopNavSpan"}>
          <Link className="desktopNavSpan" href="/give">
            Give
          </Link>
        </li>
        <li className={pathname === "/contact" ? "active" : "desktopNavSpan"}>
          <Link className="desktopNavSpan" href="/contact">
            Contact
          </Link>
        </li>

        <li className={`online ${pathname.includes("events") ? "active" : ""}`}>
          <span className="desktopNavSpan">Events ▼ </span>
          <ul className="navDropdown">
            <li>
              <Link
                className={pathname === "/events" ? "activeDropdownLink" : ""}
                href="/events"
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
              >
                Calendar
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`online ${pathname.includes("watch-online") ? "active" : ""}`}
        >
          <span className="desktopNavSpan">Online ▼ </span>
          <ul className="navDropdown">
            <li>
              <Link
                className={
                  pathname === "/watch-online" ? "activeDropdownLink" : ""
                }
                href="/watch-online"
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
              >
                Previous Sermons
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
