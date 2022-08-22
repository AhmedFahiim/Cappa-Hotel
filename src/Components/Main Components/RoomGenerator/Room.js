import React from "react";
import "./Room.scss";
import {
  MdOutlineBed,
  GiBathtub,
  GiCoffeeCup,
  GiTowel,
  BsArrowRight,
} from "../../icons";

const Room = ({ img, price, name, cols, index }) => {
  return (
    <div key={name + index} className={`room ${cols}`}>
      <div className="main-holder">
        <img className="bg" src={img} alt="room-image" />
        <span className="book">Book</span>
        <div className="room-details">
          <h3 className="price">{price}</h3>
          <h3 className="name">{name}</h3>
          <div className="line"></div>
          <div className="hidden">
            <div className="icons">
              <MdOutlineBed className="room-icon" />
              <GiBathtub className="room-icon" />
              <GiCoffeeCup className="room-icon" />
              <GiTowel className="room-icon" />
            </div>
            <button className="details-button">
              <a href="#">Details</a>
              <BsArrowRight className="arrow" />
            </button>
          </div>
        </div>
        <div className="over-lay"></div>
      </div>
    </div>
  );
};

const RoomMapping = ({ data }) => {
  return data.map((room, index) => {
    return (
      <Room
        img={room.img}
        price={room.price}
        name={room.name}
        cols={room.cols}
        index={index}
      />
    );
  });
};

export { Room, RoomMapping };
