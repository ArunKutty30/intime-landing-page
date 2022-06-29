import Button from "../../components/Button/button";
import "./nft.scss";
import time from "../../assets/images/time.gif";
const Nft = () => {
  return (
    <div className="collection">
      <h1 className="center" data-aos='fade-up'>OUR COLLECTIONS</h1>
      <div className="type">
        <div className="first_block"  data-aos='fade-up'>
          <Button variant="primary">TIME NFT</Button>
          <Button variant="primary">CHARACTER NFT</Button>
          <Button variant="primary">ASSET NFT</Button>
        </div>
        <div className="second_block"  data-aos='fade-up'>
          <img src={time} width="300" height="300" alt="collection"></img>
        </div>
        <div className="third_block"  data-aos='fade-up'>
          <h1 className="center mb-10">TIME NFT</h1>
          <p>
            Time NFT holds the intrinsic value time (i-e age). When users buy
            Time NFT it gets locked for a particular period of time. Only when
            the lock time is finished user can unlock or unlock and sale to the
            marketplace with a profitable amount of APR .
          </p>
          <br></br>
          <p>
          Profit amount depends
            on the time period they lock the NFT and by its age. It get
            increases when the lock time is high.
          </p>
        </div>
      </div>
      <div className="center mt-40" data-aos="fade-up">
        <Button>Mint Time NFT</Button>
      </div>
    </div>
  );
};

export default Nft;
