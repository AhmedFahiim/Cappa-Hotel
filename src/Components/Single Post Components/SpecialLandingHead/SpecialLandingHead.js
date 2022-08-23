import React from "react";
import "./Special-head.scss";

import { NavLink } from "react-router-dom";

import { AiOutlineCalendar } from "../../icons";

const SpecialLandingHead = ({ postHead, PostMonth, PostDay }) => {
  return (
    <article className="special-landing-head">
      <div className="pathes">
        <NavLink to="/News" className="path">
          News
        </NavLink>
        <span className="page-name">/ POST PAGE</span>
      </div>
      <h1 className="post-head">{postHead}</h1>
      <div className="post-info">
        <div className="person">
          <img src="/images/team/1.jpg" alt="person-img" />
          <span className="person-name"> Emma Emily</span>
        </div>
        <div className="landing-post-date">
          <AiOutlineCalendar className="calender" />
          <span className="date">
            {PostDay} {PostMonth} 2022
          </span>
        </div>
      </div>
    </article>
  );
};

export default SpecialLandingHead;
