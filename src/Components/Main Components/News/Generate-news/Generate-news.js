import React from "react";
import { OverLay } from "../../../Sub Components";
import "./Generate-news.scss";

const GenerateNews = ({ img, day, small, main }) => {
  return (
    <div className="news-slider-item">
      <div className="blog-img-holder">
        <img className="cover-img" src={img} alt="blog" />
      </div>
      <div className="date">
        <span className="month">DEC</span>
        <span className="day">{day}</span>
      </div>
      <div className="blog-box">
        <h4 className="blog-small-head">{small}</h4>
        <h4 className="blog-main-head">
          <a href="#">{main}</a>
        </h4>
      </div>
      <OverLay />
    </div>
  );
};

export default GenerateNews;
