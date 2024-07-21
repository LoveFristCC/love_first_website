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
  const [loadVideo, setLoadVideo] = useState(false);
  const handleLoadVideo = () => {
    setLoadVideo(true);
  };
  //youtu.be/cqapy1WaAk0?si=Aa4DqazkrCvMeWOf
  https: return (
    <div className="sermon-content">
      <div className="video-container" onClick={handleLoadVideo}>
        {loadVideo ? (
          <iframe
            src={featuredVideo.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/cqapy1WaAk0/hqdefault.jpg`}
              alt="YouTube Video Thumbnail"
              className="youtube-thumbnail"
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
