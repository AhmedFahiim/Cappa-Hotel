import React from "react";

import "./Quote.scss";

import { BsChatText } from "../../icons";

const Quote = () => {
  return (
    <div className="quote-holder">
      <article className="post-quote">
        <blockquote className="quote">
          Nulla facilisi. Sedeuter nunc vouta miss mollis sapien vel, conseyer
          tureution yer vintane in libero semper. Quisque ravida eros ut turpis
          interdum ornare. Inter miss they adama seder a imerdie fames ac ante
          ipsum primis in faucibus.
        </blockquote>
        <span className="author">Micheal Martin</span>
        <BsChatText className="icon" />
      </article>
      <article className="two-images">
        <div className="imgs-holder">
          <img src="/images/resturant/1.jpg" alt="image" />
          <img src="/images/resturant/2.jpg" alt="image" />
        </div>
        <p className="img-disc">
          Design pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit
          quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Integer tristique
          sem eget leo faucibus porttitor.
        </p>
      </article>
    </div>
  );
};

export default Quote;
