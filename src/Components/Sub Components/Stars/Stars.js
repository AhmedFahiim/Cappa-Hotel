import React from "react";
import { GrStar } from "react-icons/gr";
import "./Stars.scss";

const Stars = ({ name }) => {
  return (
    <div className={`stars ${name}`}>
      <GrStar className="star" />
      <GrStar className="star" />
      <GrStar className="star" />
      <GrStar className="star" />
      <GrStar className="star" />
    </div>
  );
};

export default Stars;
