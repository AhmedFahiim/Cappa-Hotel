import React from "react";
import "./Button.scss";

import { NavLink } from "react-router-dom";

const Button = ({ content, link, href = "", name, Fun }) => {
  const buttonCondition = link ? (
    <button className={`main-button ${name}`} onClick={Fun}>
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
