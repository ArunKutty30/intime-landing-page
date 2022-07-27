import { useState } from "react";
import Button from "../../components/Button/button";
import "./nft.scss";
import time from "../../assets/images/time.gif";
const Nft = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="collection">
      <h1 className="center" data-aos="fade-up">
        COLLECTIONS
      </h1>
      <div className="type">
        <div className="first_block" data-aos="fade-up">
          <div style={{ marginBottom: "20px" }}>
            <Button variant="primary" onClick={() => setValue(1)}>
              TIME NFT
            </Button>
          </div>
        </div>
        <div className="second_block" data-aos="fade-up">
          {value === 1 && (
            <img src={time} width="300" height="300" alt="collection"></img>
          )}
          {value === 2 && (
            <div style={{ padding: "8em 3em" }}>
              <h2 style={{ color: "#fff" }}> COMING SOON</h2>
            </div>
          )}
          {value === 3 && (
            <div style={{ padding: "8em 3em" }}>
              <h2 style={{ color: "#fff" }}> COMING SOON</h2>
            </div>
          )}
        </div>
        <div className="third_block" data-aos="fade-up">
          {value === 1 && (
            <div>
              <h1 className="center mb-10">TIME NFT</h1>
              <p>
                Time NFT holds the intrinsic value time (i-e age). When users
                buy Time NFT it gets locked for a particular period of time.
                Only when the lock time is finished user can unlock or unlock
                and sale to the marketplace with a profitable amount of APR .
              </p>
              <br></br>
              <p>
                Profit amount depends on the time period they lock the NFT and
                by its age. It get increases when the lock time is high.
              </p>
            </div>
          )}
          {value === 2 && (
            <div>
              <h1 className="center mb-10">Character NFT</h1>
              <p>
                Character NFT value is based on the traits . Each NFT has a
                unique trait values. But its age depends upon the Time NFT.
              </p>
              <br></br>
            </div>
          )}
          {value === 3 && (
            <div>
              <h1 className="center mb-10">Asset NFT</h1>
              <p>Assets you can buy for your virtual world.</p>
              <br></br>
            </div>
          )}
        </div>
      </div>
      <div className="center mt-40" data-aos="fade-up">
        <a href="https://marketplace.intimenft.app">
          {" "}
          <Button>Mint Time NFT</Button>
        </a>
      </div>
    </div>
  );
};

export default Nft;
