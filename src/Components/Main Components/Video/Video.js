import React, { useState } from "react";
import { Stars, Popup } from "../../Sub Components";
import { BsPlay } from "../../icons";
import "./Video.scss";

export const VideoContext = React.createContext();

const Video = () => {
  // const [playVideo, setPlayVideo] = useState(false);

  const clickHandler = () => {
    // setPlayVideo(true);
  };

  return (
    <section
      className="video"
      style={{
        position: "relative",
        height: "70vh",
        backgroundImage: "url(images/slider/2.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <article className="video-main-content">
        <Stars />
        <h4 className="small-head">THE CAPPA LUXURY HOTEL</h4>
        <h4 className="video-section-head">Promotional Video</h4>
        <div className="playVideo">
          <BsPlay className="play" onClick={clickHandler} />
        </div>
      </article>
      <div className="over-lay"></div>
      {/* <VideoContext.Provider value={[playVideo, setPlayVideo]}>
        <Popup
          type="Video"
          source="https://www.youtube.com/embed/xh4GnTKFQso"
        />
      </VideoContext.Provider> */}
    </section>
  );
};

export default Video;
