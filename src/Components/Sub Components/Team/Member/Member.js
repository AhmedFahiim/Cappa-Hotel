import React from "react";
import { Social } from "../../../Sub Components";
import "./Member.scss";

const Member = ({ img, name, title, mail }) => {
  return (
    <article className="member">
      <div className="member-img">
        <img src={img} alt="Member" />
      </div>
      <div className="member-data">
        <h3 className="name">{name}</h3>
        <span className="title">{title}</span>
      </div>
      <div className="socials">
        <Social />
        <a className="mail" href={`mailto:${mail}`}>
          {mail}
        </a>
      </div>
    </article>
  );
};

export default Member;
