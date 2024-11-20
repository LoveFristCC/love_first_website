"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const FeaturedVideo: React.FC<any> = ({ featuredVideo }) => {
  const latestSermonDetails =
    featuredVideo.youtubeVideos[featuredVideo.youtubeVideos.length - 1];

  const [loadVideo, setLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLoadVideo = () => {
    setLoadVideo(true);
  };

  const videoUrl = `https://www.youtube.com/embed/${latestSermonDetails.youtubeId}?autoplay=1&rel=0&modestbranding=1${
    isMobile ? "&mute=1" : ""
  }`;

  return (
    <div className="sermon-content">
      <div className="video-container" onClick={handleLoadVideo} role="button">
        {loadVideo ? (
          <iframe
            src={videoUrl}
            title={`${featuredVideo.title} Sermon`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            // loading="lazy"
          ></iframe>
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${latestSermonDetails.youtubeId}/maxresdefault.jpg`}
              alt={`${featuredVideo.title} - Love First`}
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
        <p>{latestSermonDetails.sermoneTitle}</p>
        <h3>Speaker:</h3>
        <p>{latestSermonDetails.speaker}</p>
      </div>
    </div>
  );
};

export default FeaturedVideo;
