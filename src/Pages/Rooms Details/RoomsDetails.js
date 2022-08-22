import React from "react";
import { Room } from "../../Components/Main Components/RoomGenerator/Room";
import { Button, Clients } from "../../Components/Sub Components";
import {
  FullLanding,
  LandingHead,
  Price,
  Booking,
  Footer,
} from "../../Components/Main Components";
import {
  BsCheck2All,
  IoIosPeople,
  BsWifi,
  GiCoffeeCup,
  GiTowel,
  FaSwimmingPool,
  BiTimer,
} from "../../Components/icons";

import "./RoomsDetails.scss";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const RoomsDetails = () => {
  return (
    <main className="room-details">
      <FullLanding
        img1="images/slider/1.jpg"
        img2="images/slider/2.jpg"
        img3="images/slider/3.jpg"
      />
      <section className="room-details-section">
        <div className="container">
          <LandingHead stars={true} small="LUXURY HOTEL" main="Junior Suite" />
          <div className="row">
            <section className="left-column col-lg-7">
              <article className="paragraphs">
                <p className="informations">
                  Hotel non lorem ac erat suscipit bibendum nulla facilisi.
                  Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer
                  masin libero sevenion vusetion viventa augue sit amet
                  hendrerit vestibulum. Duisteyerion venenatis lacus gravida
                  eros ut turpis interdum ornare.
                </p>
                <p className="informations">
                  Interdum et malesu they adamale fames ac anteipsu pimsine
                  faucibus curabitur arcu site feugiat in tortor in, volutpat
                  sollicitudin libero. Hotel non lorem acer suscipit bibendum
                  vulla facilisi nedeuter nunc volutpa mollis sapien velet
                  conseyer turpeutionyer masin libero sempe mollis.
                </p>
              </article>
              <article className="check-instructions">
                <div className="row">
                  <div className="check in col-lg-6">
                    <h4 className="sec-head">Check-in</h4>
                    <div className="holder">
                      <BsCheck2All className="check-icon" />
                      <p className="check-dates">
                        Check-in from 9:00 AM - anytime
                      </p>
                    </div>
                    <div className="holder">
                      <BsCheck2All className="check-icon" />
                      <p className="check-dates">
                        Early check-in subject to availability
                      </p>
                    </div>
                  </div>
                  <div className="check out col-lg-6">
                    <h4 className="sec-head">Check-out</h4>
                    <div className="holder">
                      <BsCheck2All className="check-icon" />
                      <p className="check-dates">Check-out before noon</p>
                    </div>
                    <div className="holder">
                      <BsCheck2All className="check-icon" />
                      <p className="check-dates">Express check-out</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="special-instructions">
                <h4 className="sec-head">Special check-in instructions</h4>
                <p className="informations">
                  Guests will receive an email 5 days before arrival with
                  check-in instructions; front desk staff will greet guests on
                  arrival For more details, please contact the property using
                  the information on the booking confirmation.
                </p>
              </article>
              <article className="pets">
                <h4 className="sec-head">Pets</h4>
                <p className="informations">Pets not allowed</p>
              </article>
              <article className="extra-beds">
                <h4 className="sec-head">Children and extra beds</h4>
                <p className="informations">
                  Children are welcome Kids stay free! Children stay free when
                  using existing bedding; children may not be eligible for
                  complimentary breakfast Rollaway/extra beds are available for
                  $ 10 per day.
                </p>
              </article>
              <Button content="Check Now" link={true} />
            </section>
            <section className="right-column col-lg-3">
              <h4 className="sec-head">Amenities</h4>
              <div className="amenities-holder">
                <IoIosPeople className="amenities-icon" />
                <p className="info">1-2 Persons</p>
              </div>
              <div className="amenities-holder">
                <BsWifi className="amenities-icon" />
                <p className="info">Free Wifi</p>
              </div>
              <div className="amenities-holder">
                <GiCoffeeCup className="amenities-icon" />
                <p className="info">Breakfast</p>
              </div>
              <div className="amenities-holder">
                <GiTowel className="amenities-icon" />
                <p className="info">Towels</p>
              </div>
              <div className="amenities-holder">
                <BiTimer className="amenities-icon" />
                <p className="info">200 sqft room</p>
              </div>
              <div className="amenities-holder">
                <FaSwimmingPool className="amenities-icon" />
                <p className="info">Swimming Pool</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="similar">
        <div className="container">
          <LandingHead small="LUXURY HOTEL" main="Similar Rooms" />
          <Swiper
            className="swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={35}
            speed={800}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <Room
                img="images/rooms/1.jpg"
                name="Junior Suite"
                price="150$ / Night"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Room
                img="images/rooms/2.jpg"
                name="Family Room"
                price="200$ / Night"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Room
                img="images/rooms/3.jpg"
                name="Double Room"
                price="250$ / Night"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Room
                img="images/rooms/1.jpg"
                name="Deluxe Room"
                price="300$ / Night"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Room
                img="images/rooms/2.jpg"
                name="Superior Room"
                price="150$ / Night"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Room
                img="images/rooms/3.jpg"
                name="Wellness room"
                price="400$ / Night"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Price />
      <Booking />
      <Clients />
      <Footer />
    </main>
  );
};

export default RoomsDetails;
