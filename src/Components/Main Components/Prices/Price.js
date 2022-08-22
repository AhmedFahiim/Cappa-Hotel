import React from "react";
import Callus from "../../Sub Components/Call-us/Call-us";
import Services from "./Extra Services/Extra-Services";
import "./Price.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const Price = () => {
  return (
    <section className="price-section">
      <div className="container">
        <div className="price row">
          <artical className="details col-lg-4">
            <h3 className="small-head">Best Prices</h3>
            <h3 className="section-head">Extra Services</h3>
            <p className="price-disc">
              The best prices for your relaxing vacation. The utanislen quam
              nestibulum ac quame odion elementum sceisue the aucan.
            </p>
            <p className="price-disc">
              Orci varius natoque penatibus et magnis disney parturient monte
              nascete ridiculus mus nellen etesque habitant morbine.
            </p>
            <Callus type="For information" word={true} />
          </artical>
          <artical className="services-main-holder col-lg-8">
            <Swiper
              className="swiper"
              modules={[Pagination]}
              spaceBetween={50}
              pagination={{ clickable: true }}
              loop={true}
              speed={900}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              grabCursor={true}
            >
              <SwiperSlide>
                <Services
                  img="images/pricing/1.jpg"
                  name="Room Cleaning"
                  price="$50"
                  duration="month"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Services
                  img="images/pricing/2.jpg"
                  name="Drinks included"
                  price="$30"
                  duration="daily"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Services
                  img="images/pricing/3.jpg"
                  name="Room Breakfast"
                  price="$30"
                  duration="daily"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Services
                  img="images/pricing/1.jpg"
                  name={"Safe & Secure"}
                  price="$15"
                  duration="daily"
                />
              </SwiperSlide>
            </Swiper>
          </artical>
        </div>
      </div>
    </section>
  );
};

export default Price;
