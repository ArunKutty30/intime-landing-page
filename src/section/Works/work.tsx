import React from "react";
import "./work.scss";
const Work = () => {
  return (
    <div className="work">
      <h1 data-aos="fade-up">HOW IT WORKS?</h1>
      {/* <div>
        <h1>Updating Soon. . .</h1>
      </div> */}
      <div className="iframecontainer">
        <iframe
          className="responsive-iframe"
          src="https://www.youtube.com/embed/nOx2RtdU_Io"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default Work;
