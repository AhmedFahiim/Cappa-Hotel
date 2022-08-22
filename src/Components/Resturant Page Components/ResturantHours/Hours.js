import React from "react";
import "./Hours.scss";

import { PlaceInfo } from "../../Main Components";
import { AiOutlineClockCircle } from "../../icons";

const Hours = () => {
  return (
    <section className="hours">
      <div className="container">
        <PlaceInfo
          placeInfo="Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sightsand sounds of the culinary artistry on display. The menu showcasesboth Asian and European influences, with a tempting selection ofclassic favorites and creative dishes for you to sample. Cheeseconnoisseurs will be drawn to the The Wine and Cheese Cellar, housedin five-meter-high glass walls, where our knowledgeable staff canintroduce you to some of New York's greatest culinary treasures."
          small="AN EXPERIENCE FOR THE SENSES"
          main="The Restaurant"
        />
        <article className="meals-schedule">
          <h3 className="returant-head">Hours</h3>
          <div className="meal">
            <AiOutlineClockCircle className="clock" />
            <p className="time">
              Breakfast: <time>7.00 am – 11.00 am </time>(daily)
            </p>
          </div>
          <div className="meal">
            <AiOutlineClockCircle className="clock" />
            <p className="time">
              Lunch: <time> 12.00 noon – 2.00 pm</time>(daily)
            </p>
          </div>
          <div className="meal">
            <AiOutlineClockCircle className="clock" />
            <p className="time">
              Dinner: <time>open from 6.30 pm, last order at 10.00 pm </time>
              (daily)
            </p>
          </div>
        </article>
        <article className="dress-code">
          <h3 className="returant-head">Dress Code</h3>
          <p className="rules">
            Smart casual (no shorts, hats, or sandals permitted)
          </p>
        </article>
        <article className="terrace">
          <h3 className="returant-head">Terrace</h3>
          <p className="rules">Open for drinks only</p>
        </article>
      </div>
    </section>
  );
};

export default Hours;
