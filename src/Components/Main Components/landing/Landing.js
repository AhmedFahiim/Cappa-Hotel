import React, { useRef, useEffect } from "react";

import { CallUs } from "../../Sub Components";
import Header from "../Header/Header";
import MainBox from "./MainBox/MainBox";

import "./Landing.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

function Landing() {
  const swiper = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      swiper.current.swiper.slideNext();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="landing">
      <Header />
      <Swiper
        className="swiper"
        ref={swiper}
        modules={[Pagination, EffectFade]}
        pagination={{ clickable: true }}
        loop={true}
        effect="fade"
        speed={900}
      >
        <SwiperSlide>
          <MainBox
            small={"Luxury Hotel & Best Resort"}
            main={["Enjoy a Luxury", <br />, "Experience"]}
            img="images/slider/1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainBox
            small={"Unique Place to Relax & Enjoy"}
            main={["The Perfect", <br />, "Base For You"]}
            img="images/slider/2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainBox
            small="The Ultimate Luxury Experience"
            main={["Enjoy The Best", <br />, "Moments of Life"]}
            img="images/slider/3.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <CallUs type="Reservation" word={true} />
    </section>
  );
}

export default Landing;
