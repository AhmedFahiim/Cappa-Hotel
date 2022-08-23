import React from "react";
import "./NewsPage.scss";

import { Pagination } from "../../Components/Sub Components";

import { Posts, Aside } from "../../Components/News Components";

import {
  ShortLanding,
  LandingHead,
  Footer,
} from "../../Components/Main Components";

export const postsData = [
  {
    id: 0,
    img: "images/resturant/1.jpg",
    month: "DEC",
    day: "02",
    smallHead: "RESTAURANT",
    mainHead: "Historic restaurant renovated",
    details:
      "Hotel potenti fringilla pretium ipsum non blandit. Vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis enesta mauris suscipit mis nec est aliquam, a tincidunt eros iacu suscipit risus eu ullamcorper fauibu.",
    href: "0",
  },
  {
    id: 1,
    img: "images/spa/1.jpg",
    month: "DEC",
    day: "04",
    smallHead: "SPA CENTER",
    mainHead: "Benefits of Spa Treatments",
    details:
      "Hotel potenti fringilla pretium ipsum non blandit. Vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis enesta mauris suscipit mis nec est aliquam, a tincidunt eros iacu suscipit risus eu ullamcorper fauibu.",
    href: "1",
  },
  {
    id: 2,
    img: "images/rooms/7.jpg",
    month: "DEC",
    day: "06",
    smallHead: "HOTEL DESIGN",
    mainHead: "Retro Lighting Design in The Hotels",
    details:
      "Hotel potenti fringilla pretium ipsum non blandit. Vivamus eget nisi non mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis enesta mauris suscipit mis nec est aliquam, a tincidunt eros iacu suscipit risus eu ullamcorper fauibu.",
    href: "2",
  },
];

export const AsideData = [
  { img: "images/resturant/1.jpg", Head: "Historic restaurant renovated" },
  { img: "images/spa/1.jpg", Head: "Benefits of Spa Treatments" },
  { img: "images/rooms/7.jpg", Head: "Retro Lighting Design in The Hotels" },
];

export const tags = [
  "Resturant",
  "Hotel",
  "Spa",
  "Healthy Club",
  "Luxury Hotel",
];

const News = () => {
  return (
    <main className="newsPage">
      <ShortLanding img="images/rooms/7.jpg">
        <LandingHead stars={true} small="HOTEL BLOG" main="Our News" />
      </ShortLanding>
      <section className="posts-holder">
        <div className="container">
          <div className="row">
            <section className="posts col-lg-8 col-xl-7">
              <Posts data={postsData} />
              <Pagination />
            </section>
            <section className="posts-aside col-lg-4 col-xl-3">
              <Aside data={AsideData} tags={tags} />
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default News;
