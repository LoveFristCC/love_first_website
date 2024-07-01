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
      className={pathname === "/" || pathname === "/connect" ? "homeNav" : ""}
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
