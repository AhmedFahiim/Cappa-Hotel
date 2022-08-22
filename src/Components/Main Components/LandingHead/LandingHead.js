import React from "react";
import { Stars } from "../../Sub Components";
import "./LandingHead.scss";

const LandingHead = ({ small, main, stars }) => {
  const starsCond = stars && <Stars />;

  return (
    <article className="LandingHead">
      {starsCond}
      <h1 className="special-small-head">{small}</h1>
      <h1 className="special-main-head">{main}</h1>
    </article>
  );
};

export default LandingHead;
