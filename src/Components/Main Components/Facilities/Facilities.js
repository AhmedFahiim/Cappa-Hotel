import React, { useState, useEffect, useRef } from "react";
import Faciliti from "./Faciliti/Faciliti";
import {
  GiPlanetConquest,
  AiOutlineCar,
  MdOutlineBed,
  BsWifi,
  GiCoffeeCup,
  FaSwimmingPool,
} from "../../icons";
import "./Facilities.scss";

const Facilities = () => {
  const facilitiSection = useRef();
  const [Reached, setReached] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset + 600 >
        facilitiSection.current.offsetTop +
          facilitiSection.current.clientHeight -
          window.innerHeight
      ) {
        setReached(true);
      }
    });
  }, []);

  return (
    <section
      ref={facilitiSection}
      className={`facilities ${Reached && "reached"}`}
    >
      <div className="container">
        <article className="facilities-section-head">
          <h4 className="small-head">OUR SERVICES</h4>
          <h4 className="main-head">Hotel Facilities</h4>
        </article>
        <article className="facilities-holder">
          <div className="row">
            <Faciliti
              head={"Pick Up & Drop"}
              disc="We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant."
            >
              <GiPlanetConquest className="faciliti-icon" />
              <GiPlanetConquest className="bg" />
            </Faciliti>
            <Faciliti
              head="Parking Space"
              disc="Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
            >
              <AiOutlineCar className="faciliti-icon" />
              <AiOutlineCar className="bg" />
            </Faciliti>
            <Faciliti
              head="Room Service"
              disc="Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
            >
              <MdOutlineBed className="faciliti-icon" />
              <MdOutlineBed className="bg" />
            </Faciliti>
            <Faciliti
              head="Swimming Pool"
              disc="Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.
              "
            >
              <FaSwimmingPool className="faciliti-icon" />
              <FaSwimmingPool className="bg" />
            </Faciliti>
            <Faciliti
              head="Fibre Internet"
              disc="Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant."
            >
              <BsWifi className="faciliti-icon" />
              <BsWifi className="bg" />
            </Faciliti>
            <Faciliti
              head="Breakfast"
              disc="Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant."
            >
              <GiCoffeeCup className="faciliti-icon" />
              <GiCoffeeCup className="bg" />
            </Faciliti>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Facilities;
