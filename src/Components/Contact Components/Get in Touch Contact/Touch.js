import React from "react";
import "./Touch.scss";

import { GetInTouch } from "../../Main Components";

import { AiOutlineMail, GoLocation, FiPhoneCall } from "../../icons";

const Touch = () => {
  return (
    <section className="touch-us">
      <div className="row">
        <section className="hotel-data col-lg-6">
          <h2 className="hotel-name">The Cappa Luxury Hotel</h2>
          <p className="hotel-disc">
            Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the
            aucan ligula. Orci varius natoque penatibus et magnis dis parturient
            monte nascete ridiculus mus nellentesque habitant morbine.
          </p>
          <article className="icons-data">
            <FiPhoneCall className="data-icon" />
            <div className="contact-main-content">
              <span className="head-word">Reservation</span>
              <a href="tel:855 100 4444">855 100 4444</a>
            </div>
          </article>
          <article className="icons-data">
            <AiOutlineMail className="data-icon" />
            <div className="contact-main-content">
              <span className="head-word">Email Info</span>
              <a href="mailto:info@luxuryhotel.com">info@luxuryhotel.com</a>
            </div>
          </article>
          <article className="icons-data">
            <GoLocation className="data-icon" />
            <div className="contact-main-content">
              <span className="head-word">Address</span>
              <address>
                1616 Broadway NY, New York 10001
                <br /> United States of America
              </address>
            </div>
          </article>
        </section>
        <section className="hotel-contact-form col-lg-5">
          <GetInTouch butotnContent="Send Message" extraRow={true} />
        </section>
      </div>
    </section>
  );
};

export default Touch;

// const IconsData = (type, content, head, Children) => {
//   const mainDataCond =
//     type == "address" ? (
//       <address className="data">{content}</address>
//     ) : type == "email" ? (
//       <a href={`mailto:${content}`}>{content}</a>
//     ) : (
//       <a href={`tel:${content}`}>{content}</a>
//     );

//   return (
//     <article className="icons-data">
//       {Children}
//       <div className="contact-main-content">
//         <span className="head-word">{head}</span>
//         {/* {mainDataCond} */}
//       </div>
//     </article>
//   );
// };
