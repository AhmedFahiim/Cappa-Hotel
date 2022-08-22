import React from "react";
import "./Rooms.scss";
import { RoomMapping } from "../RoomGenerator/Room";

const Rooms = () => {
  const Rooms = [
    {
      cols: "col-md-4",
      img: "images/rooms/1.jpg",
      price: "150$ / Night",
      name: "Junior Suite",
    },
    {
      cols: "col-md-4",
      img: "images/rooms/2.jpg",
      price: "200$ / Night",
      name: "Family Room",
    },
    {
      cols: "col-md-4",
      img: "images/rooms/3.jpg",
      price: "250$ / Night",
      name: "Double Room",
    },
    {
      cols: "col-md-6 big",
      img: "images/rooms/4.jpg",
      price: "300$ / Night",
      name: "Deluxe Room",
    },
    {
      cols: "col-md-6 big",
      img: "images/rooms/7.jpg",
      price: "350$ / Night",
      name: "Superior Room",
    },
  ];

  return (
    <section className="rooms">
      <div className="container">
        <article className="section-head">
          <h2 className="small-head">THE CAPPA LUXURY HOTEL</h2>
          <h2 className="main-head">Rooms {"&"} Suites</h2>
        </article>
        <article className="rooms-holder">
          <div className="row">
            <RoomMapping data={Rooms} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Rooms;
