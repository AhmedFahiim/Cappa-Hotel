import React from "react";
import "./Button.scss";

const Button = ({ content, link, href, name }) => {
  const buttonCondition = link ? (
    <button className={`main-button ${name}`}>
      <a className="button-link" href={href}>
        {content}
      </a>
    </button>
  ) : (
    <button className="main-button">{content}</button>
  );
  return <>{buttonCondition}</>;
};

export default Button;
