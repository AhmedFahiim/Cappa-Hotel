import React from "react";
import { Clients } from "../Components/Sub Components";
import FlipedRoom from "../Components/Rooms Components/FlipedRoom";
import {
  ShortLanding,
  LandingHead,
  Price,
  Booking,
  Footer,
} from "../Components/Main Components";

const roomsData = [
  {
    img: "images/rooms/1.jpg",
    price: "150$ / NIGHT  ",
    name: "Junior Suite",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },
  {
    img: "images/rooms/2.jpg",
    price: "200$ / NIGHT  ",
    name: "Family Room",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },
  {
    img: "images/rooms/3.jpg",
    price: "250$ / NIGHT  ",
    name: "Double Room",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },

  {
    img: "images/rooms/4.jpg",
    price: "300$ / NIGHT  ",
    name: "Deluxe Room",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },
  {
    img: "images/rooms/7.jpg",
    price: "350$ / NIGHT  ",
    name: "Superior Room",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },
  {
    img: "images/rooms/2.jpg",
    price: "350$ / NIGHT  ",
    name: "Wellness Room",
    info: "Hotel viverra tristique ustoni miss vitae sediam neque nivamus aestan.",
    feature: {
      Person: "1-2 Persons",
      Bed: " Twin Bed",
      wifi: "free wifi",
      breakfast: "breakfast",
    },
  },
];

const RoomsSuites = () => {
  return (
    <main className="Rooms">
      <ShortLanding img="images/slider/3.jpg">
        <LandingHead
          stars={true}
          small="THE CAPPA LUXURY HOTEL"
          main={"Rooms & Suites"}
        />
      </ShortLanding>
      <section className="fliped-rooms-holder" style={{ padding: "120px 0" }}>
        <div className="container">
          <div className="row" style={{ gap: "0" }}>
            <FlipedRoom data={roomsData} />
          </div>
        </div>
      </section>
      <Price />
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default RoomsSuites;
