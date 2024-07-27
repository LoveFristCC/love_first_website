"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav/Nav";
import MobileNav from "./nav/MobileNav";

export default function Header() {
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
    <header className={"homeNav"}>
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
      {mobile ? <MobileNav /> : <Nav />}
    </header>
  );
}
