import React, { useState } from "react";

import Button from "../../components/Button/button";
import "./header.scss";
import Sidebar from "./sidebar";
import menu from "../../assets/icons/menu.png";
const Header = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <div className="header">
        <div>
          <h1>INTIME</h1>
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
          <a href="#whitepaper">Whitepaper</a>
        </div>
        <a href="https://marketplace.intimenft.app" target="blank">
          <Button style={{ fontFamily: "Grind" }} className="btn">
            Launch App
          </Button>
        </a>

        <div className="nav_menu" onClick={() => setValue(!value)}>
          <img src={menu} alt="menu" width="30" height="30"></img>
        </div>
        {value && <Sidebar setValue={setValue} />}
      </div>
      {/* <div className="merchandise">
        Check out our{" "}
        <a href="https://store.intimenft.app" target="blank">
          Merchandise
        </a>
      </div> */}
    </>
  );
};

export default Header;
