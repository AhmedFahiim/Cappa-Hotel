import React from "react";
import "./GalleryItems.scss";
import { OverLay } from "../../Sub Components";
import { BsPlay } from "../../icons";

const GalleryItems = ({ video, col, src }) => {
  const videoCond = video && (
    <div className="video-icon">
      <BsPlay className="play" />
    </div>
  );
  return (
    <section className={`gallery-item ${col}`}>
      <div className="oevr-lay-holder">
        <img src={src} alt="gallery-item" />
        {videoCond}
        <OverLay />
      </div>
    </section>
  );
};

export default GalleryItems;
