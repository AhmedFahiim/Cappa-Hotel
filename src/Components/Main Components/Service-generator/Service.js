import React from "react";
import { Button, OverLay } from "../../Sub Components";

import { AiOutlineClockCircle } from "../../icons";

import "./Service.scss";

export const ServiceImage = ({ img }) => {
  return (
    <div className="service-img col-lg-6">
      <img src={img} alt="service" />
      <OverLay />
    </div>
  );
};

export const ServiceDetails = ({
  smallHead,
  mainHead,
  detail,
  button,
  time,
}) => {
  const buttonCond = button ? (
    <Button link={true} content="Learn More" href="#" />
  ) : (
    <div className="working-times">
      <AiOutlineClockCircle className="clock" />
      <p className="time">
        Daily <time>{time}</time>
      </p>
    </div>
  );

  return (
    <div className="service-details col-lg-6">
      <h4 className="small-head">{smallHead}</h4>
      <h4 className="main-head">{mainHead}</h4>
      <p className="service-detail">{detail}</p>
      {buttonCond}
    </div>
  );
};
