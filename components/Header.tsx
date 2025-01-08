"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Nav from "./nav/Nav";
import MobileNav from "./nav/MobileNav";

export default function Header({ pages }: { pages: any }) {
  const [mobile, setMobile] = useState<boolean | null>(null);

  const showDanielFastLink =
    pages.find((el: any) => el?.title === "Daniel Fast") || null;

  const showBigGiveLink =
    pages.find((el: any) => el?.title === "Big Give") || null;

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1200 ? true : false);
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
      {mobile ? (
        <MobileNav
          showDanielFastLink={showDanielFastLink}
          showBigGiveLink={showBigGiveLink}
        />
      ) : (
        <Nav
          showDanielFastLink={showDanielFastLink}
          showBigGiveLink={showBigGiveLink}
        />
      )}
    </header>
  );
}
