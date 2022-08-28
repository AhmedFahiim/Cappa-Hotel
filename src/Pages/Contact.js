import React from "react";

import {
  ShortLanding,
  LandingHead,
  Booking,
  Footer,
} from "../Components/Main Components";
import { Clients } from "../Components/Sub Components";

import { Touch, Map } from "../Components/Contact Components";

const Contact = () => {
  return (
    <main className="contact">
      <ShortLanding img="images/rooms/4.jpg">
        <LandingHead stars={true} small="GET IN TOUCH" main="Contact Us" />
      </ShortLanding>
      <section className="contact-form">
        <div className="container">
          <Touch />
          <Map />
        </div>
      </section>
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default Contact;
