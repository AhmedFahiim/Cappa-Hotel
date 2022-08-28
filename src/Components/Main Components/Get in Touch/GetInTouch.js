import React from "react";
import "./Get-in-touch.scss";

import { Button } from "../../Sub Components";

const Replay = ({ butotnContent, extraRow }) => {
  const extraRowCond = extraRow && (
    <>
      <div className="input number col-lg-6">
        <input type="text" placeholder="Your Number *" />
      </div>
      <div className="input subject col-lg-6">
        <input type="text" placeholder="Subject *" />
      </div>
    </>
  );

  return (
    <article className="replay-comment">
      <h2 className="form-head">Leave a Replay</h2>
      <form className="replay-form">
        <div className="row">
          <div className="input name col-lg-6">
            <input type="text" placeholder="Full Name *" />
          </div>
          <div className="input mail col-lg-6">
            <input type="email" placeholder="email adress *" />
          </div>
          {extraRowCond}
          <div className="input text-area col-12">
            <textarea rows={8} placeholder="Your comment *"></textarea>
          </div>
        </div>
        <Button link={true} content={butotnContent} />
      </form>
    </article>
  );
};

export default Replay;
