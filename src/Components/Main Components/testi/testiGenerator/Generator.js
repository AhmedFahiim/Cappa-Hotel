import React from "react";
import Stars from "../../../Sub Components/Stars/Stars";
import "./Generator.scss";

const Generator = (props) => {
  return (
    <div className="testimonail">
      <p className="opinion">{props.opinion}</p>
      <div className="client-data">
        <div className="client-img">
          <img src={props.img} alt="client" />
        </div>
        <div className="client-rate">
          <Stars />
          <span className="client-name">{props.name}</span>
          <span className="guest-word">Guest review</span>
        </div>
      </div>
    </div>
  );
};

export default Generator;
