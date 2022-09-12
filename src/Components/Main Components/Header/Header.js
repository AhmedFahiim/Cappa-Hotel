import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "../../icons";
import "./Header.scss";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 450) {
        setPosition(!position);
      } else setPosition(false);
    };
  }, []);

  const navHandler = () => {
    setToggle(!toggle);
  };

  const scrollTop = () => {
    window.scrollTo(0);
  };

  return (
    <header className={position ? "fixed" : ""}>
      <div className="container">
        <article className="logo">
          <NavLink onClick={scrollTop} to="/">
            <img src={`/images/${position ? "logo-dark" : "logo"}.png`} />
          </NavLink>
        </article>
        <article className="links-holder">
          <ul
            className={`links ${toggle ? "active" : ""} ${
              position ? "fixed" : ""
            }`}
            id="links"
          >
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/">
                Home
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/About">
                about
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/Rooms">
                rooms {"&"} suites
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/Resturant">
                restaurant
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/Spa">
                spa
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/Gallery">
                gallery
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/News">
                news
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink onClick={scrollTop} to="/Contact">
                contact
              </NavLink>
            </li>
          </ul>
          <GiHamburgerMenu onClick={navHandler} className="bars" />
        </article>
      </div>
    </header>
  );
}

export default Header;
