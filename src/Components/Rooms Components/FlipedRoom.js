import React from "react";
import { OverLay } from "../Sub Components";
import { BsWifi, MdOutlineBed, IoIosPeople, GiCoffeeCup } from "../icons";
import { NavLink } from "react-router-dom";
import "./Fliped-Room.scss";

const FlipedRoom = ({ data }) => {
  const scrollUp = () => {
    window.scrollTo({ top: "0" });
  };

  return data.map((room) => {
    return (
      <article key={room.name} className="room-fliped-card col-md-6 col-lg-4">
        <div style={{ backgroundImage: `url(${room.img})` }} className="card">
          <div className="card-face front">
            <div className="room-data-fliped">
              <p className="room-price-fliped">{room.price}</p>
              <h4 className="room-name-fliped">{room.name}</h4>
            </div>
            <span className="room-book-fliped">Book</span>
          </div>
          <div className="card-face back">
            <div className="room-data-fliped">
              <p className="room-price-fliped">{room.price}</p>
              <h4 className="room-name-fliped">{room.name}</h4>
            </div>
            <p className="room-info-fliped">{room.info}</p>
            <article className="room-features-fliped">
              <div className="feature-flip">
                <IoIosPeople className="flip-icon" />
                <p className="feature-data-fliped">{room.feature.Person}</p>
              </div>
              <div className="feature-flip">
                <MdOutlineBed className="flip-icon" />
                <p className="feature-data-fliped">{room.feature.Bed}</p>
              </div>
              <div className="feature-flip">
                <BsWifi className="flip-icon" />
                <p className="feature-data-fliped">{room.feature.wifi}</p>
              </div>
              <div className="feature-flip">
                <GiCoffeeCup className="flip-icon" />
                <p className="feature-data-fliped">{room.feature.breakfast}</p>
              </div>
            </article>
            <div className="nav-holder">
              <NavLink
                onClick={scrollUp}
                className="details-nav"
                to="/RoomsDetails"
              >
                Details
              </NavLink>
            </div>
          </div>
          <OverLay />
        </div>
      </article>
    );
  });
};

export default FlipedRoom;
