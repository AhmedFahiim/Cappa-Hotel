import React from "react";

import {
  Landing,
  Form,
  Luxury,
  Rooms,
  Price,
  Video,
  Facilities,
  Testi,
  Services,
  News,
  Booking,
  Footer,
} from "../Components/Main Components";
import { Clients } from "../Components/Sub Components";

const Home = () => {
  return (
    <main className="home">
      <Landing />
      <Form />
      <Luxury />
      <Rooms />
      <Price />
      <Video />
      <Facilities />
      <Testi img="images/slider/2.jpg" />
      <Services />
      <News />
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default Home;
