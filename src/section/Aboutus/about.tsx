import React from "react";
import "./about.scss";
import team from "../../assets/images/team.png";
const About = () => {
  return (
    <div className="about">
      <h1>WHO WE ARE</h1>
      <div className="content">
        <div>
          <img src={team} width="450" height="400" alt='about'></img>
        </div>
        <div className="about_info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error
            libero eveniet sapiente odio, tenetur sit alias aliquid expedita
            facilis tempore voluptate ullam dolores veniam ex vero, distinctio
            eius. Placeat?
          
        
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error
            libero eveniet sapiente odio, tenetur sit alias aliquid expedita
            facilis tempore voluptate ullam dolores veniam ex vero, distinctio
            eius. Placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error
            libero eveniet sapiente odio, tenetur sit alias aliquid expedita
            facilis tempore voluptate ullam dolores veniam ex vero, distinctio
            eius. Placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error
            libero eveniet sapiente odio, tenetur sit alias aliquid expedita
            facilis tempore voluptate ullam dolores veniam ex vero, distinctio
            eius. Placeat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
