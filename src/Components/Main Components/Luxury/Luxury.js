import React, { useState, useRef, useEffect } from "react";
import { Stars, CallUs } from "../../Sub Components";
import "./Luxury.scss";

const Luxury = () => {
  const luxurySection = useRef();
  const [Reached, setReached] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.pageYOffset + 450 >
        luxurySection.current.offsetTop +
          luxurySection.current.clientHeight -
          window.innerHeight
      ) {
        setReached(true);
      }
    });
  }, []);

  return (
    <section ref={luxurySection} className={`luxury ${Reached && "reached"}`}>
      <div className="container">
        <div className="row">
          <article className="main-content col-lg-5">
            <Stars />
            <h2 className="small-head">THE CAPPA LUXURY HOTEL</h2>
            <h2 className="main-head">Enjoy a Luxury Experience</h2>
            <p>
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat. Donec in quis the pellentesque velit. Donec id
              velit ac arcu posuere blane.
            </p>
            <p>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
            <CallUs type="Reservation" word={true} />
          </article>
          <article className="imgs-box col-lg-7">
            <img src="images/luxury/8.jpg" alt="image" />
            <img src="images/luxury/2.jpg" alt="image" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Luxury;
