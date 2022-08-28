import React from "react";
import "./Comment.scss";

import { Stars } from "../../Sub Components";
import { RiArrowGoBackLine } from "../../icons";

const Comment = ({ img, Name, date, comment }) => {
  return (
    <article className="comment">
      <article className="comment-person-image">
        <img src={`/${img}`} alt="Person-image" />
      </article>
      <article className="comment-data">
        <Stars />
        <div className="name-date">
          <p className="person-name">{Name}</p>
          <span className="comment-date">{date}</span>
        </div>
        <p className="comment-content">{comment}</p>
        <div className="replay-comment">
          <span className="replay-word">Replay</span>
          <RiArrowGoBackLine className="replay-icon" />
        </div>
      </article>
    </article>
  );
};

export default Comment;
