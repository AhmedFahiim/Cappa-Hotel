import React, { useContext } from "react";
import "./GalleryItems.scss";

import { OverLay, Popup } from "../../Sub Components";
import { ActivePopupContext, VideoContext } from "../../../App/App";

import { BsPlay } from "../../icons";

const GalleryItems = ({ data }) => {
  const [ActivePopup, setActivePopup] = useContext(ActivePopupContext);
  const [, setPlayVideo] = useContext(VideoContext);

  const idHandler = (itemId) => {
    setActivePopup(itemId);
    setPlayVideo(true);
  };

  return data.map(({ id, type, col, src, popSource }) => {
    return (
      <section
        key={id}
        className={`gallery-item ${col}`}
        onClick={() => idHandler(id)}
      >
        <div className="over-lay-holder">
          <img src={src} alt="gallery-item" />
          {type == "Video" && (
            <div className="video-icon">
              <BsPlay className="play" />
            </div>
          )}
          <OverLay />
        </div>
        {id == ActivePopup && <Popup type={type} source={popSource} />}
      </section>
    );
  });
};

export default GalleryItems;
