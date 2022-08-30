import React, { useContext, useRef } from "react";
import "./Popup.scss";

import { VideoContext, GalleryContext } from "../../../App/App";

import { AiOutlineClose } from "../../icons";

const Popup = ({ type, source }) => {
  //   const [PlayGalley, SetPlayGalley] = useContext(VideoContext);
  // const [ShowImage, setShowImage] = useContext(GalleryContext);

  const test = useRef();
  const closePopup = () => {
    // SetPlayGalley(false);
    // setPlayVideo(false);
  };

  const mediaCond =
    type == "Video" ? (
      <iframe src={source} allowFullScreen></iframe>
    ) : (
      <img src={source} alt="Room image" />
    );

  return (
    <article ref={test} className={`popup`}>
      <div className="main-holder">
        <AiOutlineClose className="closeIcon" onClick={closePopup} />
        <div className="type-holder">{mediaCond}</div>
      </div>
    </article>
  );
};
export default Popup;
