import React from "react";
import "./Post-details.scss";

const PostDetails = ({ img, head }) => {
  return (
    <section className="single-post-details">
      <div className="post-img">
        <img src={`/${img}`} alt="post-img" />
      </div>
      <h2 className="post-head">{head}</h2>
      <div className="post-info-holder">
        <p className="info">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit
          quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Integer tristique
          sem eget leo faucibus porttitor.
        </p>
        <p className="info">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit
          quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Integer tristique
          sem eget leo faucibus porttitor.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
