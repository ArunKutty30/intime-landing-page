import React from "react";
import Button from "../../components/Button/button";
import "./community.scss";
const Community = () => {
  return (
    <div className="community">
      <div className="card" data-aos="fade-up">
        <h1>JOIN OUR COMMUNITY*</h1>
        <p>
          Meet our team,artist,collection and platform updates ,announcements
          and more
        </p>
        <a href="https://discord.gg/hYxGu4M4">
          <Button>Join Our Discord</Button>
        </a>
      </div>
    </div>
  );
};

export default Community;
