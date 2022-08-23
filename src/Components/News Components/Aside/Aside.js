import React from "react";
import {
  SearchComponent,
  RecentPosts,
  Archives,
  Categories,
  Tags,
} from "../Aside Components/AsideComponents";

const Aside = ({ data, tags }) => {
  return (
    <aside className="posts-aside">
      <SearchComponent />
      <RecentPosts data={data} />
      <Archives />
      <Categories />
      <Tags tags={tags} />
    </aside>
  );
};

export default Aside;
