import React from "react";
import Member from "./Member/Member";
import "./Team.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <article className="team-section-head">
          <h2 className="small">PROFESSIONALS</h2>
          <h2 className="main">Meet The Team</h2>
        </article>
        <Swiper
          className="swiper"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          speed={900}
          spaceBetween={30}
          slidesPerGroup={3}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          <SwiperSlide>
            <Member
              img="images/team/1.jpg"
              name="Micheal White"
              title="Guest Service Department"
              mail="Micheal@hotel.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Member
              img="images/team/2.jpg"
              name="Oliva Martin"
              title="Reservations Manger"
              mail="Oliva@hotel.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Member
              img="images/team/3.jpg"
              name="Enrico Brown"
              title="Head Chef"
              mail="Enrico@hotel.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Member
              img="images/team/4.jpg"
              name="Valentina Karla"
              title="General Manager"
              mail="Valentina@hotel.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Member
              img="images/team/5.jpg"
              name="Mariana Dana"
              title={"F&B Manager"}
              mail="Mariana@hotel.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Member
              img="images/team/6.jpg"
              name="Victoria Dan"
              title="Meetings and Events Manager"
              mail="Victoria@hotel.com"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
