import React from "react";
import { AiOutlineGlobal, FaFacebookF } from "../../icons";
import { CallUs, Social } from "../../Sub Components";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

let year = new Date().getFullYear();

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0);
  };

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
                  <NavLink onClick={scrollTop} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink onClick={scrollTop} to="/Rooms">
                    rooms {"&"} suites
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink onClick={scrollTop} to="/Spa">
                    Spa {"&"} wellness
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink onClick={scrollTop} to="/Resturant">
                    restaurant
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink onClick={scrollTop} to="/About">
                    about
                  </NavLink>
                </li>
                <li className="footer-link">
                  <NavLink onClick={scrollTop} to="/Contact">
                    contact
                  </NavLink>
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
        <span className="copy-right">
          Copyright &copy; {year} | Developed by
        </span>{" "}
        {""}
        <span className="myName">FAHII.M</span>
      </div>
    </footer>
  );
};

export default Footer;

export { FaFacebookF };
