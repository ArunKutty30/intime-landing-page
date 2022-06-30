import React from "react";

import './roadmap.scss'
import Roadmap1 from "../../assets/icons/roadmap1.svg";
import Roadmap2 from "../../assets/icons/roadmap2.svg";
import Roadmap3 from "../../assets/icons/roadmap3.svg";
import Roadmap4 from "../../assets/icons/roadmap4.svg";
import Roadmap5 from "../../assets/icons/roadmap5.svg";
import Roadmap6 from "../../assets/icons/roadmap6.svg";

const roadmap = [
    {
      icon: Roadmap1,
      title: "July 30 2022",
      description: "Launch of Time NFT",
    },
    {
      icon: Roadmap2,
      title: "February 11,2022",
      description: "Character NFT Launch",
    },
    {
      icon: Roadmap3,
      title: "April 25,2023",
      description: "INTIME Token",
    },
    {
      icon: Roadmap4,
      title: "May 15,2023",
      description: "Staking Pool",
    },
    {
      icon: Roadmap5,
      title: "July 01,2023",
      description: "Asset NFT ",
    },
    {
      icon: Roadmap6,
      title: "November 07,2023",
      description: "INTIME GAME",
    },
    {
        icon: Roadmap6,
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
            <h1 style={{fontSize:'2.3em',marginBottom:'1em'}} data-aos='fade-up'>
              ROADMAP
            </h1>
            
          </div>
          <div className="roadmap_wrapper">
            <div className="roadmap_section">
              {roadmap
                .map(({ description, title, icon }, index) => (
                  <section className="timeline" key={index}>
                   <div className="timeline_left"> <b className="mb-10 mt-20">{title}</b></div>
                   <div className="timeline_middle"></div>
                    <div className="timeline_right"><p>{description}</p></div>
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
