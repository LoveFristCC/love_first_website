"use client";
import Image from "next/image";
import { useState } from "react";
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

  const handleLoadVideo = () => {
    setLoadVideo(true);
  };

  return (
    <section className="individual-sermon-content">
      <div className="individual-video-section">
        <AnimatePresence>
          {loadVideo ? (
            <motion.div
              // key={featuredVideo.youtubeId} // Ensure the div is keyed for each video
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // // exit={{ opacity: 0, scale: 0.9 }}
              // transition={{ duration: 0.5 }}
              className="individual-video-container"
            >
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          ) : (
            <motion.div
              // key={featuredVideo.youtubeId} // Ensure the div is keyed for each video
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // // exit={{ opacity: 0, scale: 0.9 }}
              // transition={{ duration: 0.5 }}
              className="individual-video-container"
              onClick={handleLoadVideo}
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
            // key={featuredVideo.youtubeId} // Ensure the div is keyed for each video
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: 20 }}
            // transition={{ duration: 0.5 }}
            className="individual-sermon-details"
          >
            <h3>Sermon Series:</h3>
            <p>{currentSeries.title}</p>
            <h3>Message Title:</h3>
            <p>{featuredVideo.title}</p>
            <h3>Speaker:</h3>
            <p>{featuredVideo.speaker}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <h2>View Our Other Sermons From Our Series {currentSeries.title}!</h2>
      <div className="individual-video-list">
        {currentSeries.youtubeVideos
          .filter((video: any) => video.youtubeId !== featuredVideo.youtubeId)
          .map((el: { title: string; youtubeId: string }, i: number) => (
            <div
              key={i}
              className="individual-video-item"
              onClick={() => {
                setFeaturedVideo(el);
                setLoadVideo(false); // Reset loadVideo to trigger animation
              }}
            >
              <Image
                src={`https://img.youtube.com/vi/${el.youtubeId}/maxresdefault.jpg`}
                alt={`${el.title} - Love First`}
                className="thumbnail-image"
                width={200}
                height={113}
              />
              <h3>{el.title}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default IndividualSermonYouTubePlayer;
