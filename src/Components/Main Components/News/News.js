import React, { useRef } from "react";
import GenerateNews from "./Generate-news/Generate-news";
import { CgArrowRight, CgArrowLeft } from "../../icons";
import "./News.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const News = () => {
  const rightArrow = useRef();
  const leftArrow = useRef();
  return (
    <section className="news">
      <div className="container">
        <article className="news-section-head">
          <h4 className="small-head">HOTEL BLOG</h4>
          <h4 className="main-head">Our News</h4>
        </article>
        <article className="news-slider-main-holder">
          <Swiper
            className="swiper"
            modules={[Navigation]}
            spaceBetween={25}
            loop={true}
            speed={900}
            grabCursor={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: leftArrow.current,
              nextEl: rightArrow.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = leftArrow.current;
              swiper.params.navigation.nextEl = rightArrow.current;
            }}
          >
            <SwiperSlide>
              <GenerateNews
                img="images/news/1.jpg"
                day="02"
                small="Resturant"
                main="Historical resturant renovated"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GenerateNews
                img="images/news/2.jpg"
                day="04"
                small="Spa"
                main="Benefits of Spa Treatments"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GenerateNews
                img="images/news/3.jpg"
                day="06"
                small="Bathrooms"
                main="Hotel Bathroom Collections"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GenerateNews
                img="images/news/4.jpg"
                day="08"
                small="Health"
                main="Weight Loss with Fitness health club"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GenerateNews
                img="images/news/5.jpg"
                day="08"
                small="Design"
                main="Retro Lighting design in hotels"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GenerateNews
                img="images/news/6.jpg"
                day="02"
                small="Health"
                main="Benifits of swimming for your health"
              />
            </SwiperSlide>
            <div ref={rightArrow} className="arrow right">
              <CgArrowRight className="arrowIcon" />
            </div>
            <div ref={leftArrow} className="arrow left">
              <CgArrowLeft className="arrowIcon" />
            </div>
          </Swiper>
        </article>
      </div>
    </section>
  );
};

export default News;
