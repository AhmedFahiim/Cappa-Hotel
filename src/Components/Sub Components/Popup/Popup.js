import React, { useContext } from "react";
import "./Popup.scss";

import { VideoContext } from "../../Main Components/Video/Video";
import { GalleryContext } from "../../Gallery Components/Gallery items/GalleryItems";

import { AiOutlineClose } from "../../icons";

const Popup = ({ source, type }) => {
  // const [playVideo, setPlayVideo] = useContext(VideoContext);
  const [PlayGalley, SetPlayGalley] = useContext(GalleryContext);

  const closePopup = () => {
    // setPlayVideo(false);
    SetPlayGalley(false);
  };

  const mediaCond =
    type == "Video" ? (
      <iframe
        src={source}
        title="Hotel Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ) : (
      <img src={source} alt="Room image" />
    );

  return (
    <article className={`popup ${PlayGalley == true ? "display" : ""}`}>
      <div className="main-holder">
        <AiOutlineClose className="closeIcon" onClick={closePopup} />
        <div className="type-holder">{mediaCond}</div>
      </div>
    </article>
  );
};

export default Popup;
