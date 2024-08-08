import Link from "next/link";
import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { youtubeSeries } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import PreviousSermonYouTubePlayer from "@/components/previousSermonYouTubePlayer/PreviousSermonYouTubePlayer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Previous Sermons - Love First Christian Center",
    description:
      "Explore past sermons at Love First Christian Center. Listen to inspiring messages that uplift and strengthen your faith journey. Stay connected with our community.",
    openGraph: {
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
          layout="fill"
          objectFit="fill"
          quality={100}
          priority
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
