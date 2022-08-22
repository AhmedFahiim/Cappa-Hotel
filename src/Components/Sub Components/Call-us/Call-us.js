import React from "react";
import { FiPhoneCall } from "../../icons";
import "./Call-us.scss";
const CallUs = ({ type, word }) => {
  const wordCondition = word && <span className="type">{type}</span>;

  return (
    <div className="left-side call-us">
      <div className="icon">
        <FiPhoneCall className="phone-icon" />
      </div>
      <div className="number">
        {wordCondition}
        <a href="tel:855 100 4444">855 100 4444</a>
      </div>
    </div>
  );
};

export default CallUs;
