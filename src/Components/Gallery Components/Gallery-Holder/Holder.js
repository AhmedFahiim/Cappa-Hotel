import React from "react";
import "./Holder.scss";
const Holder = ({ children, name }) => {
  return (
    <section className={`Gallery-Holder ${name}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Holder;
