import React from "react";
import "./Faciliti.scss";
const Faciliti = ({ head, disc, children }) => {
  return (
    <article className="faciliti col-lg-4">
      <div className="content">
        {children}
        <h4 className="faciliti-head">{head}</h4>
        <p className="faciliti-disc">{disc}</p>
      </div>
    </article>
  );
};

export default Faciliti;
