import DanielFastContent from "./FastClient";
import type { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { danielFast } from "@/sanity/lib/queries";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  const siteName = "Love First Christian Center";
  return {
    title: "Daniel Fast - Love First Christian Center",
    description:
      "Discover the spiritual and physical benefits of the Daniel Fast. Learn about this biblical fasting method, its guidelines, and how it can deepen your faith while promoting health and wellness.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/fast",
    },
  };
}

export default async function Fast() {
  const fastingData: any = await sanityFetch({
    query: danielFast,
  });
  return <DanielFastContent fastingData={fastingData[0]} />;
}
