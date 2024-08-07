"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IndividualSermonYouTubePlayer = ({
  currentSeries,
}: {
  currentSeries: any;
}) => {
  const [loadVideo, setLoadVideo] = useState(false);
  const [featuredVideo, setFeaturedVideo] = useState(
    currentSeries.youtubeVideos[0]
  );

  const videoSectionRef = useRef<HTMLDivElement>(null);

  const handleLoadVideo = () => {
    setLoadVideo(true);
  };

  const handleVideoClick = (el: any) => {
    setFeaturedVideo(el);
    setLoadVideo(false);
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="individual-sermon-content">
      <div className="individual-video-section" ref={videoSectionRef}>
        {featuredVideo.youtubeId && (
          <>
            <AnimatePresence>
              {loadVideo ? (
                <motion.div
                  key={featuredVideo.youtubeId}
                  initial={{ rotate: 180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="individual-video-container"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${featuredVideo.title} Sermon`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    width="426"
                    height="240"
                    loading="lazy"
                  ></iframe>
                </motion.div>
              ) : (
                <motion.div
                  key={featuredVideo.youtubeId}
                  initial={{ rotate: 180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="individual-video-container"
                  onClick={handleLoadVideo}
                  role="button"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
                    alt={`${featuredVideo.title} - Love First`}
                    className="individual-featured-image"
                    height={500}
                    width={500}
                    quality={100}
                  />
                  <div className="individual-play-button"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key={featuredVideo.youtubeId}
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="individual-sermon-details"
              >
                <h3>Sermon Series:</h3>
                <p>{currentSeries.title}</p>
                <h3>Message Title:</h3>
                <p>{featuredVideo.sermoneTitle}</p>
                <h3>Speaker:</h3>
                <p>{featuredVideo.speaker}</p>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>

      <h2>View Our Other Sermons From Our Series {currentSeries.title}!</h2>
      <div className="individual-video-list">
        {currentSeries.youtubeVideos
          .filter((video: any) => video.youtubeId !== featuredVideo.youtubeId)
          .map((el: { sermoneTitle: string; youtubeId: string }, i: number) => (
            <div
              key={i}
              className="individual-video-item"
              onClick={() => handleVideoClick(el)}
            >
              <Image
                src={`https://img.youtube.com/vi/${el.youtubeId}/maxresdefault.jpg`}
                alt={`${el.sermoneTitle} - Love First`}
                className="thumbnail-image"
                width={200}
                height={113}
              />
              <h3>{el.sermoneTitle}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default IndividualSermonYouTubePlayer;
