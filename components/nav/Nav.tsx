import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="links">
      <ul>
        <li className={pathname === "/about-love-first" ? "active" : ""}>
          <span>About &darr;</span>
          <ul>
            <li>
              <Link href="/about-love-first">Our History</Link>
            </li>
            <li>
              <Link href="/about-love-first/location">Location</Link>
            </li>
            <li>
              <Link href="/about-love-first/pastors">Our Pastors</Link>
            </li>
          </ul>
        </li>
        <li className={pathname === "/connect" ? "active" : ""}>
          <span>Connect &darr;</span>
          <ul>
            <li>
              <Link href="/connect">All Groups</Link>
            </li>
            <li>
              <Link href="/connect/creative-arts">Creative Arts</Link>
            </li>
            <li>
              <Link href="/connect/love-groups">Love Groups</Link>
            </li>
            <li>
              <Link href="/connect/media-team">Media Team</Link>
            </li>
            <li>
              <Link href="/connect/ministries">Ministries</Link>
            </li>
            <li>
              <Link href="/connect/service-volunteers">Service Volunteers</Link>
            </li>
            <li>
              <Link href="/connect/volunteer-army">Volunteer Army</Link>
            </li>
            <li>
              <Link href="/connect/youth">Youth Group</Link>
            </li>
          </ul>
        </li>
        <li className={pathname === "/prayer" ? "active" : ""}>
          <Link href="/prayer">Prayer</Link>
        </li>
        <li className={pathname === "/give" ? "active" : ""}>
          <Link href="/give">Give</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>

        <li
          className={`online ${pathname === "/watch-online" ? "active" : ""}`}
        >
          <Link href="/watch-online">Online</Link>
        </li>
      </ul>
    </nav>
  );
}
