import React from "react";
import "./Posts.scss";

import {
  ServiceImage,
  ServiceDetails,
} from "../../Main Components/Service-generator/Service";

const Posts = ({ data }) => {
  return data.map((post) => {
    return (
      <article key={post.id} className="post">
        <ServiceImage img={post.img}>
          <div className="post-date">
            <p className="post-month">{post.month}</p>
            <p className="post-day">{post.day}</p>
          </div>
        </ServiceImage>
        <ServiceDetails
          smallHead={post.smallHead}
          mainHead={post.mainHead}
          detail={post.details}
          button={true}
          href={post.href}
        />
      </article>
    );
  });
};

export default Posts;
