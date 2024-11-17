import { redirect } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Redirect from "@/components/RedirectComponent";

export default async function NotFound() {
  const [redirectLinks] = await Promise.all([
    sanityFetch<any>({
      query: redirect,
    }),
  ]);
  console.log("🚀 ~ redirectLinks:", redirectLinks);

  return <Redirect redirectLinks={redirectLinks} />;
}
