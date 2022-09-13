import React from "react";
import "./Spa.scss";

import {
  FullLanding,
  PlaceInfo,
  Testi,
  FAQ,
  Footer,
} from "../../Components/Main Components";
import { CallUs } from "../../Components/Sub Components";

import {
  ServiceImage,
  ServiceDetails,
} from "../../Components/Main Components/Service-generator/Service";

const Spa = () => {
  return (
    <main className="spa">
      <FullLanding
        img1="images/spa/1.jpg"
        img2="images/fitness/1.jpg"
        img3="images/pool/1.jpg"
      />
      <div className="container">
        <section className="spa-info">
          <PlaceInfo
            placeInfo="Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent volutpat nibh ac sodales sodales. Nunc tincidunt erat sed nisi faucibus, eget sagittis libero imperdiet. Nunc risus magna, imperdiet gravida ultricies in, aliquam a tortor. Vestibulum tristique posuere magna, quis elementum neque luctus non. Aenean sed arcu efficitur, commodo justo ut, accumsan massa. Vivamus ac risus in felis imperdiet mollis id sit amet odio. Vestibulum dignissim finibus diam a commodo. Nulla quis miss dururana egestas semper. In sit amet nunc sed felis lacinia tempus sed quis ipsum."
            small="SO MANY WAYS TO UNWIND"
            main={"Spa & Wellness"}
          />
          <CallUs word={true} type="Reservations" />
        </section>
        <section className="sevices">
          <div className="row">
            <ServiceImage img="images/spa/1.jpg" />
            <ServiceDetails
              button={false}
              smallHead="EXPERIENCES"
              mainHead="Spa Center"
              detail="Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine."
              time=": 7.00 am to 9.00 pm"
            />
            <ServiceDetails
              button={false}
              smallHead="MODERN"
              mainHead="Fitness  Center"
              detail="Fitness center duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine."
              time=": 6.00 am to 9.00 pm"
            />
            <ServiceImage img="images/fitness/1.jpg" />
            <ServiceImage img="images/pool/1.jpg" />
            <ServiceDetails
              button={false}
              smallHead="EXPERIENCES"
              mainHead={"The Health Club & Pool"}
              detail="Spa center inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine."
              time=": 10.00 am to 7.00 pm"
            />
          </div>
        </section>
      </div>
      <FAQ />
      <Testi img="images/spa/2.jpg" />
      <Footer />
    </main>
  );
};

export default Spa;
