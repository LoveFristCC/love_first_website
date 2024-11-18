"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Redirect({ redirectLinks }: { redirectLinks: any }) {
  console.log("🚀 ~ redirectLinks:", redirectLinks);
  const pathname = usePathname();
  console.log("🚀 ~ pathname:", pathname);
  const router = useRouter();
  console.log("🚀 ~ router:", router);

  useEffect(() => {
    const matchedRedirectLink = redirectLinks.find(
      (el: any) => el.title === pathname || ""
    );
    console.log("🚀 ~ matchedRedirectLink:", matchedRedirectLink);

    if (matchedRedirectLink) {
      router.push(matchedRedirectLink.redirectUrl);
    } else {
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <div className="redirectContainer"></div>;
}
