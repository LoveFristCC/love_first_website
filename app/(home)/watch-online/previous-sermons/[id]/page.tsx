import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { sanityFetch } from "@/sanity/lib/fetch";
import { individualPastSeries } from "@/sanity/lib/queries";
import IndividualYouTubePlayer from "./IndividualYouTubePlayer";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const seriesData: any = await sanityFetch({
    query: individualPastSeries,
    params: { slug: params.id },
  });
  const currentSeries = seriesData[0]?.series[0];
  const image = urlForImage(currentSeries.seriesImage)
    ?.height(1000)
    .width(2000)
    .url();

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${currentSeries.title} - Love First`,
    description: `Explore our series, ${currentSeries.title}, and discover insightful messages that we hope will enrich and inspire your life.`,
    openGraph: {
      // @ts-ignore
      images: [image, ...previousImages],
    },
  };
}

export default async function IndividualSermons({
  params,
}: {
  params: { id: string };
}) {
  const seriesData: any = await sanityFetch({
    query: individualPastSeries,
    params: { slug: params.id },
  });

  console.log(seriesData[0].series);
  const currentSeries = seriesData[0]?.series[0];
  const image = urlForImage(currentSeries.seriesImage)
    ?.height(1000)
    .width(2000)
    .url();

  return (
    <div>
      <section className="individual-series-header">
        <Image
          src={image as string}
          alt={`${currentSeries.title} - Love First Christian Center`}
          layout="fill"
          objectFit="fill"
          quality={100}
          priority
        />
        <h1>{currentSeries.title}</h1>
      </section>
      <h2 className="individualSubHead">Watch Our Latest Sermons</h2>
      <IndividualYouTubePlayer currentSeries={currentSeries} />
    </div>
  );
}
