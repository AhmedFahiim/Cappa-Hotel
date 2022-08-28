import React from "react";
import "./Single-Post.scss";

import {
  ShortLanding,
  Footer,
  GetInTouch,
} from "../../Components/Main Components";
import {
  SpecialLandingHead,
  PostDetails,
  Comment,
  Quote,
} from "../../Components/Single Post Components";

import { postsData, AsideData, tags } from "../News/News";
import { Aside } from "../../Components/News Components";

import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { PostId } = useParams();

  const postImg = postsData[PostId].img;
  const mainHead = postsData[PostId].mainHead;
  const month = postsData[PostId].month;
  const day = postsData[PostId].day;

  return (
    <main className="post-details">
      <ShortLanding img="images/slider/1.jpg">
        <SpecialLandingHead
          postHead={mainHead}
          PostMonth={month}
          PostDay={day}
        />
      </ShortLanding>
      <section className="single-post-main-content">
        <div className="container">
          <div className="row">
            <article className="main-content col-lg-8 col-xl-7">
              <PostDetails head={mainHead} img={postImg} />
              <Quote />
              <Comment
                img="images/team/2.jpg"
                Name="robert martin"
                date="29 October 2022"
                comment="Restaurant ultricies nibh non dolor maximus sceleue inte molliser rana neque nec tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus."
              />
              <GetInTouch butotnContent="Send Comment" />
            </article>
            <article className="aside col-lg-4 col-xl-3">
              <Aside data={AsideData} tags={tags} />
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SinglePost;
