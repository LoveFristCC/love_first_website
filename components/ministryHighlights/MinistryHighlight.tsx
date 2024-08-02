import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";

const MinistryHighlights = async ({
  highlightData,
}: {
  highlightData: any;
}) => {
  if (!highlightData || highlightData.length === 0) return null;

  return (
    <section className="ministry-highlights">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="highlight-title">
            Explore Highlights from Our Recent {highlightData.title} Event
          </h2>
          <p className="highlight-description">{highlightData.description}</p>
        </div>
        <div className="carousel-container">
          {highlightData.eventImages.map((el: any, i: number) => {
            const imageUrl = urlForImage(el)?.height(627).width(1200).url();

            return (
              <div key={i} className="carousel-item">
                <Image
                  src={imageUrl as string}
                  alt={`${highlightData.title} - event picture ${i + 1}`}
                  height={500}
                  width={500}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MinistryHighlights;
