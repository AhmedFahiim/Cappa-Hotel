import React from "react";
import { Stars, Button, OverLay } from "../../../Sub Components";
import "./MainBox.scss";

const MainBox = ({ img, small, main, animate }) => {
  return (
    <article className="main-box" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <Stars name={`${animate ? "animated" : "normal"}`} />
        <h1 className={`small-head ${animate ? "animated" : "normal"}`}>
          {small}
        </h1>
        <h1
          className={`main-word ${animate} ${animate ? "animated" : "normal"}`}
        >
          {main}
        </h1>
        <Button
          name={`${animate ? "animated" : "normal"}`}
          content={"Rooms & Suites"}
          link={true}
          href="#"
        />
      </div>
      <OverLay />
    </article>
  );
};

export default MainBox;
