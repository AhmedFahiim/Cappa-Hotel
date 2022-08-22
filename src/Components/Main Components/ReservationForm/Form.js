import React from "react";
import { Button } from "../../Sub Components";
import { GoTriangleDown } from "../../icons";
import "./Form.scss";

const Form = () => {
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
                <span className="head">1 Adult</span>
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
                <span className="head">Children</span>
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
                <span className="head">1 Room</span>
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
