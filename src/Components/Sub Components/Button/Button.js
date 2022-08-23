import React from "react";
import "./Button.scss";

import { NavLink } from "react-router-dom";

const Button = ({ content, link, href = "", name }) => {
  const buttonCondition = link ? (
    <button className={`main-button ${name}`}>
      <NavLink className="button-link" to={href}>
        {content}
      </NavLink>
    </button>
  ) : (
    <button className="main-button">{content}</button>
  );
  return <>{buttonCondition}</>;
};

export default Button;
