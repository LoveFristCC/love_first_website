"use client";
import { useState } from "react";
import Image from "next/image";
type FeaturedVideoProps = {
  featuredVideo: {
    url: string;
    title: string;
    serviceTitle: string;
    speaker: string;
    thumb: string;
  };
};

const FeaturedVideo: React.FC<any> = ({ featuredVideo }) => {
  console.log("🚀 ~ featuredVideo:", featuredVideo);
  const [loadVideo, setLoadVideo] = useState(false);
  const handleLoadVideo = () => {
    setLoadVideo(true);
  };
  return (
    <div className="sermon-content">
      <div className="video-container" onClick={handleLoadVideo}>
        {loadVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            // loading="lazy"
          ></iframe>
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
              alt="YouTube Video Thumbnail"
              className={`${featuredVideo.title} - Love First`}
              height={1000}
              width={1000}
            />
            <div className="play-button"></div>
          </>
        )}
      </div>
      <div className="sermon-details">
        <h3>Sermon Series:</h3>
        <p>{featuredVideo.title}</p>
        <h3>Message Title:</h3>
        <p>{featuredVideo.serviceTitle}</p>
        <h3>Speaker:</h3>
        <p>{featuredVideo.speaker}</p>
      </div>
    </div>
  );
};

export default FeaturedVideo;
