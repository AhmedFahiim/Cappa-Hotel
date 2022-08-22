import React from "react";
import {
  ShortLanding,
  LandingHead,
  Luxury,
  Price,
  Facilities,
  Testi,
  Footer,
} from "../Components/Main Components";
import { Team } from "../Components/Sub Components";

const About = () => {
  return (
    <main className="About">
      <ShortLanding img={"images/slider/1.jpg"}>
        <LandingHead
          stars={true}
          small={"Cappa Luxury Hotel"}
          main="about us"
        />
      </ShortLanding>
      <Luxury />
      <Price />
      <Facilities />
      <Team />
      <Testi img="images/slider/2.jpg" />
      <Footer />
    </main>
  );
};

export default About;
