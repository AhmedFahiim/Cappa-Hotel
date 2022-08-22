import React from "react";
import {
  AiOutlineInstagram,
  FaPinterestP,
  TiSocialYoutubeCircular,
  FiTwitter,
  FaFacebookF,
} from "../../icons";

import "./Social.scss";
const Social = () => {
  return (
    <div className="social-icons">
      <a className="social-icon" href="#">
        <AiOutlineInstagram />
      </a>
      <a className="social-icon" href="#">
        <FiTwitter />
      </a>
      <a className="social-icon" href="#">
        <TiSocialYoutubeCircular />
      </a>
      <a className="social-icon" href="#">
        <FaFacebookF />
      </a>
      <a className="social-icon" href="#">
        <FaPinterestP />
      </a>
    </div>
  );
};

export default Social;
