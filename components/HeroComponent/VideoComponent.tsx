"use client";

const VideoComponent = () => {
  return (
    <>
      <div className="overlay" />
      <video loop autoPlay muted playsInline preload="auto">
        <source src="/lfccVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoComponent;
