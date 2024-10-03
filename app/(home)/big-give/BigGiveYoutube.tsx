"use client";
import { useState } from "react";
import Image from "next/image";

const BigGiveYoutubeVideo = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <div
      className="bigGiveVideoContent"
      onClick={() => setLoadVideo(true)}
      role="button"
    >
      {loadVideo ? (
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/j_P23OM0qfc?t=5s&autoplay=1&rel=0&modestbranding=1"
          title="Big Give Sunday with Pastor Jomo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="bigGiveYouTubeThumbImage">
          <Image
            src="https://img.youtube.com/vi/j_P23OM0qfc/maxresdefault.jpg"
            alt="Big Give Sunday"
            className="big-give-youtube-thumbnail"
            height={300}
            width={600}
          />
          <div className="play-button"></div>
        </div>
      )}
    </div>
  );
};

export default BigGiveYoutubeVideo;
