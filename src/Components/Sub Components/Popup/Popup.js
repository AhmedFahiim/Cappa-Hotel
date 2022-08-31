import React, { useContext, useEffect, useState } from "react";
import "./Popup.scss";

import { VideoContext } from "../../../App/App";

import { AiOutlineClose } from "../../icons";

const Popup = ({ type, source }) => {
  const [playVideo, setPlayVideo] = useContext(VideoContext);
  const [closeState, setcloseState] = useState(false);

  useEffect(() => {
    if (closeState) {
      setPlayVideo(false);
    }
  }, [closeState]);

  const closePopup = () => {
    setcloseState(true);
  };

  const mediaCond =
    type == "Video" ? (
      <iframe src={source} allowFullScreen></iframe>
    ) : (
      <img src={source} alt="Room image" />
    );

  return (
    <article onClick={closePopup} className={`popup ${playVideo && "display"}`}>
      <div className="main-holder">
        <AiOutlineClose className="closeIcon" onClick={closePopup} />
        <div className="type-holder">{mediaCond}</div>
      </div>
    </article>
  );
};
export default Popup;
