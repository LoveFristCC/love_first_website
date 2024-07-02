"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav/Nav";
import HamburgerNav from "./nav/HamburgerNav";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1000 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <header
      className={
        pathname === "/" ||
        pathname === "/connect" ||
        pathname === "/connect/love-groups" ||
        pathname === "/connect/creative-arts" ||
        pathname === "/connect/service-volunteers" ||
        pathname === "/connect/ministries" ||
        pathname === "/connect/volunteer-army" ||
        pathname === "/connect/media-team" ||
        pathname === "/connect/youth"
          ? "homeNav"
          : ""
      }
    >
      <div className="logoContainer">
        <Link href="/">
          <Image
            src="/lfcc.webp"
            alt="Love First Christian Center, Riverview, FL"
            width="50"
            height="50"
            priority
          />
        </Link>
      </div>
      {mobile ? <HamburgerNav /> : <Nav />}
    </header>
  );
}
