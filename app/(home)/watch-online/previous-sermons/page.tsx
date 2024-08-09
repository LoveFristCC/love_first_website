import Link from "next/link";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { youtubeSeries } from "@/sanity/lib/queries";
import type { Metadata, ResolvingMetadata } from "next";
import PreviousSermonYouTubePlayer from "@/components/previousSermonYouTubePlayer/PreviousSermonYouTubePlayer";

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
    title: "Previous Sermons - Love First Christian Center",
    description:
      "Explore past sermons at Love First Christian Center. Listen to inspiring messages that uplift and strengthen your faith journey. Stay connected with our community.",
    openGraph: {
      images: [...previousImages],
      siteName: siteName,
      url: "https://www.lfcc.tv/watch-online/previous-sermons",
    },
  };
}

export default async function PreviousSermons() {
  const seriesData: any = await sanityFetch({ query: youtubeSeries });
  const latestSeries = seriesData[1];
  const youTubeVideos = latestSeries.youtubeVideos;
  const prevSermonsHeader = latestSeries.seriesImage;
  const prevSeriesTitle = latestSeries.title;
  const latestSermon = youTubeVideos[youTubeVideos.length - 1];
  const image = urlForImage(prevSermonsHeader)?.height(1000).width(2000).url();

  return (
    <div>
      <section className="previous-series-header">
        <Image
          src={image as string}
          alt={`${prevSeriesTitle} - Love First Christian Center`}
          sizes="100vw"
          fill
          style={{
            objectFit: "fill",
          }}
          priority
          quality={100}
        />
      </section>
      <section className="latest-sermon-section">
        <h1>
          Watch the Final Sermon from Our Previous Series{" "}
          <strong>{prevSeriesTitle}</strong>
        </h1>
        <PreviousSermonYouTubePlayer
          seriesTitle={prevSeriesTitle}
          featuredVideo={latestSermon}
        />
      </section>
      <section className="previous-sermons-section">
        <h2>View Sermons from Our Previous Series</h2>
        <div className="previous-sermons-list">
          {seriesData.map(
            (
              item: { seriesImage: string; route: string; title: string },
              index: number
            ) => {
              const imageUrl = urlForImage(item.seriesImage)
                ?.height(1000)
                .width(2000)
                .url();

              return (
                <Link
                  href={`/watch-online/previous-sermons/${item.route}`}
                  key={index}
                >
                  <div className="previous-sermon-item">
                    <Image
                      src={imageUrl as string}
                      height={300}
                      width={300}
                      alt={`${item.title} - Love First`}
                    />
                    <p className="previous-sermon-title">{item.title}</p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}
