import React, { useState, useEffect } from "react";

import { Stars, CallUs, Button } from "../../Sub Components";
import { GoTriangleDown, BsCheck2All } from "../../icons";
import "./Booking.scss";

const Booking = () => {
  const [Adults, setAdults] = useState("Audult");
  const [Childrens, setChildrens] = useState("Children");

  useEffect(() => {
    let dropdownMenu = document.querySelectorAll(".dropdown-menu-booking");

    dropdownMenu.forEach((menu, index) => {
      Array.from(menu.children).forEach((item) => {
        item.addEventListener("click", (e) => {
          if (index === 0) setAdults(e.currentTarget.textContent);
          if (index === 1) setChildrens(e.currentTarget.textContent);
        });
      });
    });
  }, []);

  useEffect(() => {
    let boxsArray = document.querySelectorAll(".detail-box");
    let dropdownMenu = document.querySelectorAll(".dropdown-menu-booking");

    boxsArray.forEach((box, index) => {
      box.addEventListener("click", () => {
        dropdownMenu.forEach((menu) => {
          if (dropdownMenu[index] != menu) {
            menu.classList.remove("active");
          }
        });
        dropdownMenu[index].classList.toggle("active");
      });
    });
  }, []);

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
                    <input className="box-head" type="date" />
                  </div>
                  <div className="check-out">
                    <input className="box-head" type="date" />
                  </div>
                  <div className="half Adults col-6">
                    <div className="audults detail-box">
                      <div className="wraper">
                        <span className="box-head">{Adults}</span>
                        <GoTriangleDown className="icon" />
                      </div>
                      <ul className="dropdown-menu-booking">
                        <li className="dropdown-item active">Audult</li>
                        <li className="dropdown-item">1 Audult</li>
                        <li className="dropdown-item">2 Audult</li>
                        <li className="dropdown-item">3 Audult</li>
                        <li className="dropdown-item">4 Audult</li>
                      </ul>
                    </div>
                  </div>
                  <div className="half children col-6">
                    <div className="children detail-box">
                      <div className="wraper">
                        <span className="box-head">{Childrens}</span>
                        <GoTriangleDown className="icon" />
                      </div>
                      <ul className="dropdown-menu-booking">
                        <li className="dropdown-item active">Children</li>
                        <li className="dropdown-item">1 Child</li>
                        <li className="dropdown-item">2 Children</li>
                        <li className="dropdown-item">3 Children</li>
                        <li className="dropdown-item">4 Children</li>
                      </ul>
                    </div>
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
