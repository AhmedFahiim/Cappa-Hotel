import React from "react";
import { AiOutlineGlobal, FaFacebookF } from "../../icons";
import { CallUs, Social } from "../../Sub Components";

import "./Footer.scss";

let year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <article className="column col-lg-4">
            <h5 className="footer-column-head">About Hotel</h5>
            <p className="about-hotel">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat.
            </p>
            <div className="language">
              <span className="chosen-language">English</span>
              <AiOutlineGlobal className="global" />
            </div>
          </article>
          <article className="column col-lg-4">
            <div className="column-holder">
              <h5 className="footer-column-head">Explore</h5>
              <ul className="explore">
                <li className="footer-link">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link">
                  <a href="#">{"Rooms & Suites"}</a>
                </li>
                <li className="footer-link">
                  <a href="#">Resturant</a>
                </li>
                <li className="footer-link">
                  <a href="#">{"Spa & Wellness"}</a>
                </li>
                <li className="footer-link">
                  <a href="#">About Hotel</a>
                </li>
                <li className="footer-link">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="column col-lg-4">
            <h5 className="footer-column-head">Contact</h5>
            <address>
              1616 Broadway NY, New York 10001
              <br /> United States of America
            </address>
            <div className="mobile-number">
              <CallUs />
            </div>
            <div className="mail">
              <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
            </div>
            <Social />
          </article>
        </div>
      </div>
      <div className="made-by">
        <span className="copy-right">&copy; Copyright {year} by</span> {""}
        <span className="myName">FAHII.M</span>
      </div>
    </footer>
  );
};

export default Footer;

export { FaFacebookF };
