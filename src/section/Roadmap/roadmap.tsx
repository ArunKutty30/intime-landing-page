import React from "react";

import "./roadmap.scss";

const roadmap = [
  {
    title: "July 30 2022",
    description: "Launch of Time NFT",
  },
  {
    title: "August 30,2022",
    description: "TIME NFT Next Release",
  },
  {
    title: "September 01,2022",
    description: "INTIME Token",
  },
  {
    title: "November,2022",
    description: "Staking Pool",
  },
  {
    title: "December 01,2022",
    description: "INTIME GAME ",
  },
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="mx pad">
        <div className="roadmap_container">
          <div className="roadmap_container-header">
            <h1
              style={{ fontSize: "2.3em", marginBottom: "1em" }}
              data-aos="fade-up"
            >
              ROADMAP
            </h1>
          </div>
          <div className="roadmap_wrapper">
            <div className="roadmap_section">
              {roadmap.map(({ description, title }, index) => (
                <section className="timeline" key={index}>
                  <div className="timeline_left">
                    {" "}
                    <b className="mb-10 mt-20">{title}</b>
                  </div>
                  <div className="timeline_middle"></div>
                  <div className="timeline_right">
                    <p>{description}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
