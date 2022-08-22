import React from "react";
import { AiOutlineClose, BsCheck2All } from "../../../icons";
import "./Extra-Services.scss";

const Services = ({ img, name, price, duration }) => {
  return (
    <article className="extra-services-slider-item">
      <div className="extra-service-img">
        <img src={img} alt="img" />
      </div>
      <div className="extra-service-details">
        <h3 className="extra-service-name">{name}</h3>
        <div className="extra-service-price">
          <h4> {price}</h4>
          <span className="duration">/{duration}</span>
        </div>
        <ul className="extra-service-list">
          <li className="extra-service-list-item">
            Hotel ut nisan the duru
            <BsCheck2All className="checked icon" />
          </li>
          <li className="extra-service-list-item">
            Orci miss natoque vasa ince
            <BsCheck2All className="checked icon" />
          </li>
          <li className="extra-service-list-item">
            Clean sorem ipsum morbin
            <AiOutlineClose className="wrong icon" />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Services;
