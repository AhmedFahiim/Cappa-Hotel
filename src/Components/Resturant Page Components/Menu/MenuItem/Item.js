import React from "react";
import "./Item.scss";

const Item = ({ menuData }) => {
  return menuData.map((item) => {
    return (
      <article
        className="menu-item animate__animated animate__fadeIn col-md-5"
        key={item.name}
      >
        <div className="item-top">
          <h4 className="item-name">{item.name}</h4>
          <span className="item-price">{item.price}</span>
        </div>
        <div className="item-bottom">
          <p className="made-of">{item.madeOf}</p>
        </div>
      </article>
    );
  });
};

export default Item;
