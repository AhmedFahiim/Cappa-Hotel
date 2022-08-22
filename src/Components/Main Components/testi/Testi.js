import React from "react";
import Generator from "./testiGenerator/Generator";
import "./Testi.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const Testi = ({ img }) => {
  return (
    <section
      className="testi"
      style={{
        backgroundImage: `url(${img})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "70vh",
        padding: "120px 0",
      }}
    >
      <article className="main-box">
        <div className="section-head">
          <h4 className="small-head">TESTIMONIALS</h4>
          <h4 className="testi-main-head">What Client's Say?</h4>
        </div>
        <div className="testi-line"></div>
        <article className="testi-main-slider-holder">
          <Swiper
            className="swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            speed={900}
            spaceBetween={40}
            grabCursor={true}
          >
            <SwiperSlide>
              <Generator
                opinion="Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."
                img="images/testi/1.jpg"
                name="Emily brown"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Generator
                opinion="Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."
                img="images/testi/2.jpg"
                name="Nolan white"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Generator
                opinion="Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan."
                img="images/testi/3.jpg"
                name="Oliva martin"
              />
            </SwiperSlide>
          </Swiper>
          <img className="quote" src="images/quot.png" alt="quote" />
        </article>
      </article>
      <div className="over-lay"></div>
    </section>
  );
};

export default Testi;
