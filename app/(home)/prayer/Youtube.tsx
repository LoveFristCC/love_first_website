"use client";
import { useState } from "react";
import Image from "next/image";

const PayerYoutubeVideo = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <div
      className="videoContent"
      onClick={() => setLoadVideo(true)}
      role="button"
    >
      <h2>Need Immediate Prayer? Watch and Pray with Us Now</h2>
      {loadVideo ? (
        <iframe
          width="426"
          height="240"
          src="https://www.youtube.com/embed/SSFmp-0bXf0?t=5s&autoplay=1&rel=0&modestbranding=1"
          title="Join Our Prayer Session with Pastor Jomo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="youTubeThumbImage">
          <Image
            src="https://img.youtube.com/vi/SSFmp-0bXf0/maxresdefault.jpg"
            alt="YouTube Video Thumbnail"
            className="youtube-thumbnail"
            height={240}
            width={426}
          />
          <div className="play-button"></div>
        </div>
      )}
    </div>
  );
};

export default PayerYoutubeVideo;
