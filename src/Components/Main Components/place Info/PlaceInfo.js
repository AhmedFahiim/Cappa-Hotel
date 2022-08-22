import React from "react";
import { LandingHead } from "../../Main Components";

import "./PlaceInfo.scss";

const PlaceInfo = ({ placeInfo, small, main }) => {
  return (
    <section className="placeInfo">
      <div className="container">
        <LandingHead small={small} main={main} stars={true} />
        <p className="place-disc">{placeInfo}</p>
      </div>
    </section>
  );
};

export default PlaceInfo;
