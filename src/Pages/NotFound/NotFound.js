import React from "react";
import "./notfound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error-page">
      <article className="error-holder">
        <h1 className="error">Page Not Found !</h1>
        <h2 className="code">404</h2>
        <p className="home">
          Sorry ! Something Went Wrong or the page not founded on the server.
          Please <NavLink to="/">Go Home</NavLink>
        </p>
      </article>
    </main>
  );
};

export default NotFound;
