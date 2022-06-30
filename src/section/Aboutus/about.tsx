import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about" id='about'>
      <h1 data-aos='fade-up'>WHO WE ARE . . .</h1>
      <div className="content">
       
        <div className="about_info">
          <p data-aos='fade-up'>
            We are a decentralised community of people intersted in 
            contributing our ideas and works in the crypto space.We focus on 
            creating products that will create impact to the people
            or revolutionise the existing system.

          </p>
          <p data-aos='fade-up'>
            We had previously worked in many dapp and defi projects as a service.But INTIME
            is our first product that we had built.You trust us and we trust you.So, this trust factor
            will be never left behind.
          </p>
          <p data-aos='fade-up'>
            Take a look on our RoadMap we are yet to lauch many products as well.We are glad 
            if we grow together with cryto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
