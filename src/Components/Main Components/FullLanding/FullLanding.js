import React, { useEffect, useRef } from "react";
import { Header } from "../../Main Components";
import { OverLay } from "../../Sub Components";
import { AiOutlineArrowDown } from "../../icons";
import "./FullLanding.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const FullLanding = ({ img1, img2, img3 }) => {
  const landingHeight = useRef();
  const swiperRef = useRef();

  const animation = () => {
    window.scrollBy({
      top: landingHeight.current.clientHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setInterval(() => {
      swiperRef.current.swiper.slideNext();
    }, 2500);
  }, []);

  return (
    <section ref={landingHeight} className="full-landing">
      <Header />
      <Swiper
        ref={swiperRef}
        className="landing-swiper"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        speed={500}
      >
        <SwiperSlide>
          <img src={img1} alt="resturant" />
          <OverLay />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="resturant" />
          <OverLay />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="resturant" />
          <OverLay />
        </SwiperSlide>
      </Swiper>
      <div
        onClick={animation}
        className="bounce animate__animated animate__bounce"
      >
        <AiOutlineArrowDown />
      </div>
    </section>
  );
};

export default FullLanding;
