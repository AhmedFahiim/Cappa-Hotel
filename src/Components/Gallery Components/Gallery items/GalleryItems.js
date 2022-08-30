import React, { useContext } from "react";
import "./GalleryItems.scss";

import { OverLay, Popup } from "../../Sub Components";
import { GalleryContext } from "../../../App/App";

import { BsPlay } from "../../icons";

const GalleryItems = ({ type, col, src, popSource }) => {
  const [ShowImage, setShowImage] = useContext(GalleryContext);

  // const VideoClickHandler = () => {
  //   setPlayGalley(true);
  // };

  const ImageClickHandler = (e) => {
    e.currentTarget.classList.add("clickedItem");
  };

  const videoCond = type == "Video" && (
    <div className="video-icon">
      <BsPlay className="play" />
    </div>
  );

  return (
    <section
      className={`gallery-item ${col} `}
      onClick={(e) => {
        ImageClickHandler(e);
      }}
    >
      <div className="over-lay-holder">
        <img src={src} alt="gallery-item" />
        {videoCond}
        <OverLay />
      </div>
      <Popup type={type} source={popSource} />
    </section>
  );
};

export default GalleryItems;
