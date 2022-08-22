import React from "react";
import { ServiceImage, ServiceDetails } from "../Service-generator/Service";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <ServiceImage img="images/resturant/1.jpg" />
          <ServiceDetails
            smallHead="DISCOVER"
            mainHead="The Restaurant"
            detail="Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine. "
            button={true}
          />
          <ServiceDetails
            smallHead="EXPERIENCES"
            mainHead="Spa Center"
            detail="Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine."
            button={true}
          />
          <ServiceImage img="images/spa/1.jpg" />
          <ServiceImage img="images/fitness/1.jpg" />
          <ServiceDetails
            smallHead="MODERN"
            mainHead="Fitness Center"
            detail="Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine."
            button={true}
          />
          <ServiceDetails
            smallHead="EXPERIENCES"
            mainHead={"The Health Club & Pool"}
            detail={
              "The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine."
            }
            button={true}
          />
          <ServiceImage img="images/pool/1.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Services;
