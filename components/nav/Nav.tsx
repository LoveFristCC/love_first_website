import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="links">
      <ul>
        <li className={pathname === "/about-love-first" ? "active" : ""}>
          <Link href="/about-love-first">About</Link>
        </li>
        <li className={pathname === "/connect" ? "active" : ""}>
          <Link href="/connect">Connect</Link>
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
