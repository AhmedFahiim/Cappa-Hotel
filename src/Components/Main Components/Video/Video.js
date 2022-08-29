import React, { useContext } from "react";
import { Stars, Popup, OverLay } from "../../Sub Components";
import { BsPlay } from "../../icons";
import "./Video.scss";

import { VideoContext } from "../../../App/App";

const Video = () => {
  const [, setPlayVideo] = useContext(VideoContext);

  const clickHandler = () => {
    setPlayVideo(true);
  };

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
          <BsPlay className="play" onClick={clickHandler} />
        </div>
      </article>
      <OverLay />

      <Popup type="Video" source="https://www.youtube.com/embed/xh4GnTKFQso" />
    </section>
  );
};

export default Video;
