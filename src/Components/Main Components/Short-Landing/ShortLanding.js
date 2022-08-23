import React from "react";
import { Header } from "../../Main Components";
import { OverLay } from "../../Sub Components";
import "./ShortLanding.scss";

const ShortLanding = ({ img, children }) => {
  const style = {
    backgroundImage: `url(/${img})`,
  };
  return (
    <section style={style} className="short-landing">
      <Header />
      <div className="container">
        {children}
        <OverLay />
      </div>
    </section>
  );
};

export default ShortLanding;
