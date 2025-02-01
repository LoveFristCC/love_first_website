"use client";
import { useState } from "react";

const ProgressBar = ({ percentFinished }: { percentFinished: string }) => {
  const [progress, setProgress] = useState(Number(percentFinished)); // Example progress, adjust dynamically based on backend data
  return (
    <section className="progress-section">
      <div className="progress-bar-container">
        <h2>We are at {progress}% towards our 12 Million dollar budget!</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>Help us raise the last 2 million!</p>
      </div>
    </section>
  );
};

export default ProgressBar;
