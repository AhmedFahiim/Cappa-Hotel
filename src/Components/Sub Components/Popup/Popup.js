import React, { useContext, useEffect, useState } from "react";
import "./Popup.scss";

import { ActivePopupContext } from "../../../App/App";
import { AiOutlineClose } from "../../icons";

const Popup = ({ type, source }) => {
  const [ActivePopup, setActivePopup] = useContext(ActivePopupContext);

  const [closeState, setcloseState] = useState(false);

  useEffect(() => {
    if (closeState) {
      setActivePopup(null);
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
    <article className={`popup ${ActivePopup != null && "display"}`}>
      <div className="main-holder">
        <AiOutlineClose className="closeIcon" onClick={closePopup} />
        <div className="type-holder">{mediaCond}</div>
      </div>
    </article>
  );
};
export default Popup;
