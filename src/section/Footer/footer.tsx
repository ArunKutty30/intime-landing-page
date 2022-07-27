import React from "react";
import "./footer.scss";
import discord from "../../assets/icons/discord.png";
// import twitter from "../../assets/icons/twitter.png";
import telegram from "../../assets/icons/telegram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <div>
          <h2>INTIME</h2>
          <p>
            Intime is a NFT trading platform where you can get only profit by
            trading your NFT. The goal of INTIME is to solve the existing
            problems in the NFT culture and create a new category of NFT for
            investments.
          </p>
        </div>

        <div className="privacy">
          <h2 style={{ fontFamily: "Proxon" }}>Privacy Terms</h2>
          <p>
            All information collected from Users, such as registration and
            account information, is subject to INTIME's Privacy Policy.
          </p>
        </div>
        <div className="social-links">
          <div>
            <a href="https://discord.gg/hYxGu4M4">
              <img src={discord} width="30" alt="discord"></img>
            </a>
            <a href="https://t.me/Intime_Community">
              <img src={telegram} width="30" alt="telegram"></img>
            </a>
          </div>
          <div className="link">
            <a href="https://docs.intimenft.app">Whitepaper</a>
            <a href="https://marketplace.intimenft.app">Marketplace</a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2em" }}>
        <h3 style={{ textAlign: "center" }}>Copyright © 2021 INTIME</h3>
      </div>
    </div>
  );
};

export default Footer;
