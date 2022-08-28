import React, { useEffect, useState } from "react";
import { Button } from "../../Sub Components";
import { GoTriangleDown } from "../../icons";
import "./Form.scss";

const Form = () => {
  const [Adults, setAdults] = useState("1 Audult");
  const [Childrens, setChildrens] = useState("Children");
  const [Rooms, setRooms] = useState("1 Room");

  useEffect(() => {
    let dropdownMenu = document.querySelectorAll(".dropdown-menu");

    dropdownMenu.forEach((menu, index) => {
      Array.from(menu.children).forEach((item) => {
        item.addEventListener("click", (e) => {
          if (index === 0) setAdults(e.currentTarget.textContent);
          if (index === 1) setChildrens(e.currentTarget.textContent);
          if (index === 2) setRooms(e.currentTarget.textContent);
        });
      });
    });
  }, []);

  useEffect(() => {
    let boxsArray = document.querySelectorAll(".detail");
    let dropdownMenu = document.querySelectorAll(".dropdown-menu");

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

  return (
    <section className="form">
      <div className="container">
        <form className="row">
          <div className="check col-xl-6">
            <input type="date" placeholder="Check in" className="check-input" />
            <input
              type="date"
              placeholder="Check out"
              className="check-input"
            />
          </div>
          <div className="details col-xl-6">
            <div className="detail">
              <div className="wraper">
                <span className="head">{Adults}</span>
                <GoTriangleDown className="arrow-down" />
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item active">1 Adult</li>
                <li className="dropdown-item">2 Adult</li>
                <li className="dropdown-item">3 Adult</li>
                <li className="dropdown-item">4 Adult</li>
              </ul>
            </div>
            <div className="detail">
              <div className="wraper">
                <span className="head">{Childrens}</span>
                <GoTriangleDown className="arrow-down" />
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item active">Children</li>
                <li className="dropdown-item">1 Child</li>
                <li className="dropdown-item">2 Children</li>
                <li className="dropdown-item">3 Children</li>
                <li className="dropdown-item">4 Children</li>
              </ul>
            </div>
            <div className="detail">
              <div className="wraper">
                <span className="head">{Rooms}</span>
                <GoTriangleDown className="arrow-down" />
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-item active">1 Room</li>
                <li className="dropdown-item">2 Room</li>
                <li className="dropdown-item">3 Room</li>
                <li className="dropdown-item">4 Room</li>
              </ul>
            </div>
            <Button content="Check Now" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
