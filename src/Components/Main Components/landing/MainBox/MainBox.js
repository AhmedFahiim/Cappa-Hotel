import React from "react";
import { Stars, Button, OverLay } from "../../../Sub Components";
import "./MainBox.scss";

const MainBox = ({ img, small, main }) => {
  return (
    <article className="main-box" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <Stars />
        <h1 className="small-head">{small}</h1>
        <h1 className="main-word">{main}</h1>
        <Button content={"Rooms & Suites"} link={true} href="Rooms" />
      </div>
      <OverLay />
    </article>
  );
};

export default MainBox;
