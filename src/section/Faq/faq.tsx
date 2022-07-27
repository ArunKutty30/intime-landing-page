import React, { useState } from "react";
import "./faq.scss";
import uparrow from "../../assets/icons/uparrow.png";
import downarrow from "../../assets/icons/downarrow.png";
const faq = [
  {
    question: "What is Intime?",
    answer:
      "Intime is a NFT trading platform where you can get only profit  by trading your NFT. The goal of INTIME is to solve the existing problems in the NFT culture and create a new category of NFT for investments. ",
  },
  {
    question: "How many can we mint per wallet?",
    answer: "2",
  },
  {
    question: "What is Time NFT",
    answer:
      "Time NFT holds the intrinsic value time (i-e age). When users buy Time NFT it gets locked for a particular period of time. Only when the lock time is finished user can unlock or unlock and sale to the marketplace with a profitable amount of APR .Profit amount depends on the time period they lock the NFT and by its age. It get increases when the lock time is high.",
  },
  {
    question: "What is Character NFT",
    answer:
      "Character NFT value is based on the traits . Each NFT has a unique trait values. But its age depends upon the Time NFT. ",
  },
];

interface IFaqCard {
  question: string;
  answer: string;
}

const Faqcard: React.FC<IFaqCard> = ({ question, answer }) => {
  const [value, setValue] = useState(false);
  return (
    <div className="faq_section" data-aos="fade-up">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div onClick={() => setValue(!value)}>{question}</div>
        {value ? (
          <img
            src={uparrow}
            width="20"
            height="20"
            alt="arrow"
            onClick={() => setValue(!value)}
          ></img>
        ) : (
          <img
            src={downarrow}
            width="20"
            height="20"
            alt="arrow"
            onClick={() => setValue(!value)}
          ></img>
        )}
      </div>

      {value && <div className="mt-20">{answer}</div>}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="faq">
      <h1 data-aos="fade-up">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="container">
        {faq.map((faq, index) => {
          return (
            <>
              <Faqcard question={faq.question} answer={faq.answer}></Faqcard>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
