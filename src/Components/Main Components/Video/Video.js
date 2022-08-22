import React from "react";
import Stars from "../../Sub Components/Stars/Stars";
import { BsPlay } from "../../icons";
import "./Video.scss";

const Video = () => {
  return (
    <section
      className="video"
      style={{
        position: "relative",
        height: "70vh",
        backgroundImage: "url(images/slider/2.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <article className="video-main-content">
        <Stars />
        <h4 className="small-head">THE CAPPA LUXURY HOTEL</h4>
        <h4 className="video-section-head">Promotional Video</h4>
        <div className="playVideo">
          <BsPlay className="play" />
        </div>
      </article>
      <div className="over-lay"></div>
    </section>
  );
};

export default Video;
