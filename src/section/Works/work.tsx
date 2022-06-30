import React from "react";
import "./work.scss";
const Work = () => {
  return (
    <div className="work">
      <h1 data-aos='fade-up'>HOW IT WORKS?</h1>
      <iframe
       className="video"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="youtube"
        data-aos='fade-up'
      ></iframe>
    </div>
  );
};

export default Work;
