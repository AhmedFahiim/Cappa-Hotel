import React, { useEffect } from "react";
import "./Clients.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const Clients = () => {
  useEffect(() => {
    const intervalClients = setInterval(() => {
      document.querySelector(".swiperClients").swiper.slideNext();
    }, 1500);
    return () => {
      clearInterval(intervalClients);
    };
  }, []);

  return (
    <section className="clients">
      <div className="container">
        <article className="clients-slider-main-holder">
          <Swiper
            className="swiperClients"
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            speed={900}
            grabCursor={true}
          >
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/1.png" alt="client" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/2.png" alt="client" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/3.png" alt="client" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/4.png" alt="client" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/5.png" alt="client" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clients-slide-item">
                <img src="images/clinets/6.png" alt="client" />
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </div>
    </section>
  );
};

export default Clients;
