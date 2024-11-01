"use client";
import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(30); // Example progress, adjust dynamically based on backend data
  return (
    <section className="progress-section">
      <div className="progress-bar-container">
        <h2>We are {progress}% towards our $1 million goal!</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>Help us reach the final stretch!</p>
      </div>
    </section>
  );
};

export default ProgressBar;
