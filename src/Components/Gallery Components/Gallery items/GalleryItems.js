import React, { useState } from "react";
import "./GalleryItems.scss";
import { OverLay, Popup } from "../../Sub Components";
import { BsPlay } from "../../icons";

export const GalleryContext = React.createContext();

const GalleryItems = ({ video, col, src }) => {
  const [PlayGalley, setPlayGalley] = useState(false);

  const clickHandler = () => {
    setPlayGalley(true);
  };

  const videoCond = video && (
    <div className="video-icon">
      <BsPlay className="play" onClick={clickHandler} />
    </div>
  );
  return (
    <section className={`gallery-item ${col}`}>
      <div className="oevr-lay-holder">
        <img src={src} alt="gallery-item" />
        {videoCond}
        <OverLay />
        <GalleryContext.Provider value={[PlayGalley, setPlayGalley]}>
          <Popup
            type="Video"
            source="https://www.youtube.com/embed/xh4GnTKFQso"
          />
        </GalleryContext.Provider>
      </div>
    </section>
  );
};

export default GalleryItems;
