import React, { useContext } from "react";
import "./GalleryItems.scss";
import { OverLay, Popup } from "../../Sub Components";
import { BsPlay } from "../../icons";

import { GalleryContext } from "../../../App/App";

const GalleryItems = ({ type, col, src, popSource }) => {
  const [, setPlayGalley] = useContext(GalleryContext);

  const clickHandler = () => {
    setPlayGalley(true);
  };

  const videoCond = type == "Video" && (
    <div className="video-icon" onClick={clickHandler}>
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
      <Popup type="Video" source={popSource} />
    </section>
  );
};

export default GalleryItems;
