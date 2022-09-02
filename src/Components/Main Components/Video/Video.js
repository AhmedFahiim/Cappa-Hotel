import React, { useContext } from "react";
import { Stars, Popup, OverLay } from "../../Sub Components";
import { BsPlay } from "../../icons";
import "./Video.scss";

import { ActivePopupContext } from "../../../App/App";

const styling = {
  position: "relative",
  height: "70vh",
  backgroundImage: "url(images/slider/2.jpg)",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

const Video = () => {
  const [ActivePopup, setActivePopup] = useContext(ActivePopupContext);
  const clickHandler = () => {
    setActivePopup(3);
  };

  return (
    <section className="video" style={styling}>
      <article className="video-main-content">
        <Stars />
        <h4 className="small-head">THE CAPPA LUXURY HOTEL</h4>
        <h4 className="video-section-head">Promotional Video</h4>
        <div className="playVideo">
          <BsPlay className="play" onClick={clickHandler} />
        </div>
      </article>
      <OverLay />
      {ActivePopup === 3 && (
        <Popup
          type="Video"
          source="https://www.youtube.com/embed/xh4GnTKFQso"
        />
      )}
    </section>
  );
};

export default Video;
