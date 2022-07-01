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
            In a future where time is money and the wealthy can live
            forever.Build your virtual city with time and trade it.To build this
            you need TIME and Character NFT.Character NFT decides the traits of
            your character and your lifespan depends upon TIME NFT.
          </p>
          <p data-aos="fade-right">
            To live long you must earn time .You can earn time by renting out
            your buildings,gamble or by locking your time. Your character value
            increases by assets you hold.Buy Asset NFT with our Intime token.
          </p>
          <p data-aos="fade-right">
            Enjoy your virtual world,have fun and earn.
          </p>

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
