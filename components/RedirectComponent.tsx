"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { redirect } from "@/sanity/lib/queries";

export default function Redirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await client.fetch(
        redirect,
        {},
        {
          perspective: "published",
          // The `published` perspective is available on the API CDN
          useCdn: false,
          // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (60 seconds)
          next: { revalidate: 0 },
        }
      );
      console.log("🚀 ~ data:", data);
      const matchedRedirectLink = data.find(
        (el: any) => el.title === pathname || ""
      );
      console.log("🚀 ~ matchedRedirectLink:", matchedRedirectLink);

      if (matchedRedirectLink) {
        router.push(matchedRedirectLink.redirectUrl);
      } else {
        router.push("/");
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="redirectContainer"></div>;
}
