import React, { useState, useEffect } from "react";
import "./Scroll-up.scss";

import { BsArrowUp } from "../../icons";

const ScrollUp = () => {
  const [scrollUp, setscrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setscrollUp(true);
      } else setscrollUp(false);
    });
  }, []);

  const scrollTopFun = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  return (
    <div
      className={`${scrollUp ? "active" : ""} scroll-up`}
      onClick={scrollTopFun}
    >
      <BsArrowUp className="arrow-up" />
    </div>
  );
};

export default ScrollUp;
