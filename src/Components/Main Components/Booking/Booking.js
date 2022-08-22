import React from "react";
import Stars from "../../Sub Components/Stars/Stars";
import CallUs from "../../Sub Components/Call-us/Call-us";
import Button from "../../Sub Components/Button/Button";
import { AiOutlineCalendar, GoTriangleDown, BsCheck2All } from "../../icons";
import "./Booking.scss";

const Booking = () => {
  const style = {
    backgroundImage: "url(images/slider/2.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    heigh: "70vh",
  };
  return (
    <section className="booking" style={style}>
      <div className="container">
        <div className="row">
          <article className="booking-content col-md-6 col-xl-5">
            <Stars />
            <p className="notes">
              Each of our guest rooms feature a private bath, wi-fi, cable
              television and include full breakfast.
            </p>
            <CallUs word={true} type="Reservation" />
            <span className="call-free">
              <BsCheck2All className="checked-icon" />
              Call us, it's toll-free.
            </span>
          </article>
          <article className="booking-form col-md-6 col-xl-4">
            <div className="content-holder">
              <div className="form-head">
                <h4 className="small-head">{"ROOMS & SUITES"}</h4>
                <h4 className="main-head">Hotel Booking Form</h4>
              </div>
              <form>
                <div className="row">
                  <div className="check-in">
                    <span className="box-head">Check in</span>
                    <AiOutlineCalendar className="icon" />
                  </div>
                  <div className="check-out">
                    <span className="box-head">Check out</span>
                    <AiOutlineCalendar className="icon" />
                  </div>
                  <div className="half Adults col-6">
                    <span className="box-head">Adults</span>
                    <GoTriangleDown className="icon" />
                  </div>
                  <div className="half children col-6">
                    <span className="box-head">Children</span>
                    <GoTriangleDown className="icon" />
                  </div>
                  <Button link={true} content="Check Avilability" href="#" />
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Booking;
