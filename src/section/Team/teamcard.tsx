import React from "react";
import "./teamcard.scss";
import insta from "../../assets/icons/insta.png";
import linkedin from "../../assets/icons/linkedin.png";
import telegram from "../../assets/icons/telegram.png";
interface ITeamCard {
  image: any;
  name: string;
  instalink: string;
  telegramlink: string;
  linkedinlink: string;
}
const TeamCard: React.FC<ITeamCard> = ({
  image,
  name,
  instalink,
  linkedinlink,
  telegramlink,
}) => {
  return (
    <div className="card" data-aos="flip-left">
      <img
        src={image}
        alt="team"
        width="300"
        height="300"
        style={{ borderRadius: "10px" }}
      />
      <h2>{name}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href={instalink}>
          <img src={insta} alt="insta" width="30"></img>
        </a>
        <a href={linkedinlink}>
          <img src={linkedin} alt="linkedin" width="30"></img>
        </a>
        <a href={telegramlink}>
          <img src={telegram} alt="telegram" width="30"></img>
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
