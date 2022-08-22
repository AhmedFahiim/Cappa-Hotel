import React from "react";
import { FullLanding, Testi, Footer } from "../Components/Main Components";
import { Hours, Menu } from "../Components/Resturant Page Components";

const Resturant = () => {
  return (
    <main className="resturant">
      <FullLanding
        img1="images/resturant/1.jpg"
        img2="images/resturant/2.jpg"
        img3="images/resturant/3.jpg"
      />
      <Hours />
      <Menu />
      <Testi img="images/slider/1.jpg" />
      <Footer />
    </main>
  );
};

export default Resturant;
