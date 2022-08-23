import React from "react";
import "./Aside-Components.scss";

import { NavLink } from "react-router-dom";

import { AiOutlineSearch, BiRightArrowAlt } from "../../icons";

const SearchComponent = () => {
  return (
    <article className="aside-component search">
      <input type="text" placeholder="Type here ..." />
      <AiOutlineSearch className="search-icon" />
    </article>
  );
};

const RecentPosts = ({ data }) => {
  return (
    <article className="aside-component recent">
      <h2 className="aside-component-head">Recent Posts</h2>
      <div className="line"></div>
      {data.map((post) => {
        return (
          <div key={post.img} className="recent-post">
            <img className="post-img" src={`/${post.img}`} alt="img-post" />
            <NavLink to="">
              <h4 className="post-head rowP">{post.Head}</h4>
            </NavLink>
          </div>
        );
      })}
    </article>
  );
};

const Archives = () => {
  return (
    <article className="aside-component Archives">
      <h2 className="aside-component-head">Archives</h2>
      <div className="line"></div>

      <div className="aside-component-content">
        <NavLink to="">
          <p className="archive rowP">December 2022</p>
        </NavLink>
        <NavLink to="">
          <p className="archive rowP">November 2022</p>
        </NavLink>
        <NavLink to="">
          <p className="archive rowP">October 2022</p>
        </NavLink>
      </div>
    </article>
  );
};

const Categories = () => {
  return (
    <article className="aside-component Categories">
      <h2 className="aside-component-head">Categories</h2>
      <div className="line"></div>

      <div className="aside-component-content">
        <NavLink to="">
          <BiRightArrowAlt className="category-arrow" />
          <p className="Category rowP">Resturant</p>
        </NavLink>
        <NavLink to="">
          <BiRightArrowAlt className="category-arrow" />
          <p className="Category rowP">Hotel Design</p>
        </NavLink>
        <NavLink to="">
          <BiRightArrowAlt className="category-arrow" />
          <p className="Category rowP">Spa Center</p>
        </NavLink>
      </div>
    </article>
  );
};

const Tags = ({ tags }) => {
  return (
    <article className="aside-component tags">
      <h2 className="aside-component-head">Tags</h2>
      <div className="line"></div>
      <div className="tags-holder">
        {tags.map((tag) => {
          return (
            <NavLink to="">
              <p key={tag} className="tag rowP">
                {tag}
              </p>
            </NavLink>
          );
        })}
      </div>
    </article>
  );
};

export { SearchComponent, RecentPosts, Archives, Categories, Tags };
