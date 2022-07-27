import React from "react";
import "./sidebar.scss";
import close from "../../assets/icons/close.png";
import Button from "../../components/Button/button";
interface ISidebar {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<ISidebar> = ({ setValue }) => {
  return (
    <div>
      <div className="sidebar">
        <div>
          <img
            src={close}
            alt="close"
            width="30"
            height="30"
            onClick={() => setValue((v) => !v)}
          ></img>
        </div>

        <a href="/" onClick={() => setValue((v) => !v)}>
          Home
        </a>
        <a href="#about" onClick={() => setValue((v) => !v)}>
          About{" "}
        </a>
        <a href="#roadmap" onClick={() => setValue((v) => !v)}>
          Roadmap
        </a>
        <a href="#team" onClick={() => setValue((v) => !v)}>
          Team
        </a>
        <a href="#whitepaper" onClick={() => setValue((v) => !v)}>
          Whitepaper
        </a>
        <a href="https://marketplace.intimenft.app">
          <Button style={{ fontFamily: "Grind", border: "1px solid white" }}>
            Launch App
          </Button>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
