import React from "react";
import "./team.scss";
import arun from "../../assets/images/arun.jpeg";
import sam from "../../assets/images/samraj.jpg";
import arunram from "../../assets/images/arunram.jpg";
import TeamCard from "./teamcard";
const team = [
  {
    name: "Mr . SamRaj",
    image: sam,
    instalink: "https://instagram.com/sam.de.zero?igshid=YmMyMTA2M2Y=",
    linkedinlink: "https://www.linkedin.com/in/sam-de-zero/",
    telegramlink: "https://t.me/samdezero",
  },
  {
    name: "Arunachalam J",
    image: arun,
    instalink: "https://instagram.com/crypto.psych?igshid=YmMyMTA2M2Y=",
    linkedinlink: "https://t.me/Arunkutty798",
    telegramlink: "https://www.linkedin.com/in/arun-kutty-430b511b0/",
  },

  {
    name: "Arunachalam N",
    image: arunram,
    instalink: "https://instagram.com/arunram77770?igshid=YmMyMTA2M2Y=",
    linkedinlink: "https://www.linkedin.com/in/arunram2000/",
    telegramlink: "https://t.me/arunramm",
  },
];
const Team = () => {
  return (
    <div className="team" id="team">
      <h1>MEET OUR TEAM . . .</h1>
      <div className="team_container">
        <div className="card_container mt-20 ">
          {team.map((a, index) => {
            return (
              <div style={{ display: "grid", alignItems: "center" }}>
                <TeamCard
                  name={a.name}
                  image={a.image}
                  key={index.toString()}
                  instalink={a.instalink}
                  linkedinlink={a.linkedinlink}
                  telegramlink={a.telegramlink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
