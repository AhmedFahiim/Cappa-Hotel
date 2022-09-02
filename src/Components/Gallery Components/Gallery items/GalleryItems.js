import React, { useContext } from "react";
import "./GalleryItems.scss";
import { BsPlay } from "../../icons";

import { OverLay, Popup } from "../../Sub Components";
import { ActivePopupContext } from "../../../App/App";

const GalleryItems = ({ data }) => {
  const [ActivePopup, setActivePopup] = useContext(ActivePopupContext);

  const idHandler = (itemId) => {
    setActivePopup(itemId);
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
        {id === ActivePopup ? <Popup type={type} source={popSource} /> : ""}
      </section>
    );
  });
};

export default GalleryItems;
