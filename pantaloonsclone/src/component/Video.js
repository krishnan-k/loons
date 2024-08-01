import React from "react";
import "../component-css/video.css";
import promovideo from "../image/Pantaloonsvideo.mp4";
const Video = () => {
  return (
    <div className="container">
      <div className="video-section">
        <video src={promovideo} autoPlay muted loop controls/>
      </div>
    </div>
  );
};

export default Video;
