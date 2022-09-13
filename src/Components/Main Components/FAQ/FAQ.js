import React, { useState } from "react";
import "./FAQ.scss";

import LandingHead from "../LandingHead/LandingHead";

let questions = [
  {
    id: 0,
    ques: "Arriving at The Spa",
    answer:
      "Please arrive at The Spa 15 minutes prior to your scheduled treatment and enjoy the calm and serenity of The Spa atmosphere. Arriving late makes it necessary to curtail the time for your treatment.",
  },
  {
    id: 1,
    ques: "Mobile Phones",
    answer:
      "Kindly refrain from using your mobile phone in The Spa premises. Please keep your mobile phone on silent mode at all times.      ",
  },
  {
    id: 2,
    ques: "Valuables",
    answer:
      "We provide a secure place for your personal items inside The Spa complex. However, we do not accept liability for loss or damage. We recommend valuable items are stored inside the safe located in your hotel room/suite.",
  },
  {
    id: 3,
    ques: "Health Matters",
    answer:
      "Please communicate health conditions such as high blood pressure and allergies, as well as pregnancy or any health-related concerns you may have when making your appointment. We do not recommend the consumption of alcohol before or directly after spa treatments or before using any facilities in the Spa and Health Club.",
  },
  {
    id: 4,
    ques: "Children",
    answer:
      "The minimum age for entry to The Spa, The Health Club and the hydrothermal facilities is 16 years of age. Children under the age of 16 may use the hotel pool if they are accompanied by a parent/adult.",
  },
  {
    id: 5,
    ques: "Safety",
    answer:
      "The max depth of the pool is 1.60 m. There is no lifeguard at the pool. Children may only use the pool if accompanied by an adult or parent/guardian.",
  },
  {
    id: 6,
    ques: "Smoking",
    answer:
      "Kindly note that you are not allowed to smoke in The Spa, The Health Club or sauna area.",
  },
];

const FAQ = () => {
  const [activeQues, setActiveQues] = useState(null);

  const showFun = (e) => {
    if (activeQues == e.currentTarget.id) {
      setActiveQues(null);
    } else {
      setActiveQues(e.currentTarget.id);
    }
  };

  return (
    <section className="faq">
      <div className="wraper">
        <div className="container">
          <LandingHead small="F.A.QS" main="Spa Etiquette" />
          <article className="questions-holder">
            {questions.map((ques) => {
              return (
                <React.Fragment key={ques.id}>
                  <Qustion data={ques} activeQues={activeQues} Fun={showFun} />
                </React.Fragment>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

const Qustion = ({ data, activeQues, Fun }) => {
  return (
    <div
      id={data.id}
      key={data.id}
      onClick={(e) => Fun(e)}
      className={`question-holder ${
        activeQues == data.id ? "show-answer" : ""
      }`}
    >
      <div className="question-head">
        <h2 className="question">{data.ques}</h2>
        <span className="question-icon">+</span>
      </div>
      <p className="answer">{data.answer}</p>
    </div>
  );
};

export default FAQ;
