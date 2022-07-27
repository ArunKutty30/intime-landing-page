import React from "react";
import "./story.scss";
import meta from "../../assets/images/story.jpg";
import Button from "../../components/Button/button";

const Story = () => {
  return (
    <div className="story">
      <div className="content">
        <div className="left_block">
          <h1 data-aos="fade-right">STORYLINE</h1>
          <p data-aos="fade-right">
            INTIME is a NFT trading platform where you can generate your profit
            by holding the Time NFT. You can play games and earn TIME and add it
            to your NFT.It is created to generate a profitable trading asset.
          </p>
          <p data-aos="fade-right">
            If you look over the past every real world assets like
            realestate,gold etc its price increases by time.So, this asset will
            be same as that.
          </p>
          <p data-aos="fade-right">Trade and Earn with Time</p>

          <Button data-aos="fade-right">READ MORE</Button>
        </div>
        <div className="right_block">
          <img src={meta} alt="meta"></img>
        </div>
      </div>
    </div>
  );
};

export default Story;
