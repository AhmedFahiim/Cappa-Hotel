import React from "react";

import "./Pagination.scss";

import { BsArrowLeftShort, BsArrowRightShort } from "../../icons";

const Pagination = () => {
  return (
    <div className="rounded-pagination">
      <div className="Arrow left">
        <BsArrowLeftShort className="pagination-arrow" />
      </div>
      <div className="page">1</div>
      <div className="page active">2</div>
      <div className="page">3</div>
      <div className="Arrow right">
        <BsArrowRightShort className="pagination-arrow" />
      </div>
    </div>
  );
};

export default Pagination;
