import React from "react";

import "./roadmap.scss";

const roadmap = [
  {
    title: "July 30 2022",
    description: "Launch of Time NFT",
  },
  {
    title: "February 11,2023",
    description: "Character NFT Launch",
  },
  {
    title: "April 25,2023",
    description: "INTIME Token",
  },
  {
    title: "May 15,2023",
    description: "Staking Pool",
  },
  {
    title: "July 01,2023",
    description: "Asset NFT ",
  },
  {
    title: "November 07,2023",
    description: "INTIME GAME",
  },
  {
    title: "Jan 01,2024",
    description: "Real World UseCase",
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
