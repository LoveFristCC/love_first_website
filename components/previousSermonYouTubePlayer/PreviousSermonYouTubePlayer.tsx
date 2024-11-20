"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const PreviousSermonYouTubePlayer: React.FC<any> = ({
  featuredVideo,
  seriesTitle,
}) => {
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

  const videoUrl = `https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1${
    isMobile ? "&mute=1" : ""
  }`;
  return (
    <div className="sermon-content">
      <div className="video-container" onClick={handleLoadVideo} role="button">
        {loadVideo ? (
          <iframe
            src={videoUrl}
            title={`${featuredVideo.sermoneTitle} Sermon`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Image
              src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
              alt={`${featuredVideo.sermoneTitle} - Love First`}
              className="featuredImage"
              height={1000}
              width={1000}
            />
            <div className="play-button"></div>
          </>
        )}
      </div>
      <div className="sermon-details">
        <h2>Sermon Series:</h2>
        <p>{seriesTitle}</p>
        <h2>Message Title:</h2>
        <p>{featuredVideo.sermoneTitle}</p>
        <h2>Speaker:</h2>
        <p>{featuredVideo.speaker}</p>
      </div>
    </div>
  );
};

export default PreviousSermonYouTubePlayer;
