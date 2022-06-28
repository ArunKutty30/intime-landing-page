import Button from "../../components/Button/button";
import "./nft.scss";
import time from '../../assets/images/time.gif'
const Nft = () => {
  return (
    <div className="collection">
      <h1 className="center">OUR COLLECTIONS</h1>
      <div className="type">
        <div className="first_block">
          <Button variant="primary">TIME NFT</Button>
          <Button variant="primary">CHARACTER NFT</Button>
          <Button variant="primary">ASSET NFT</Button>
        </div>
        <div className="second_block">
          <img src={time} width='300' height='300' alt='collection'></img>
        </div>
        <div className="third_block">
            <h1 className="center mb-10">TIME NFT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non animi
            maxime tempora commodi placeat dignissimos in autem veniam hic
            quibusdam neque aperiam repellat at, dolore nostrum. Nesciunt
            doloremque vitae perspiciatis?
           
          </p><br></br>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non animi
            maxime tempora commodi placeat dignissimos in autem veniam hic
            quibusdam neque aperiam repellat
          </p>
          
        </div>
      </div>
      <div className="center mt-40">
        <Button >Mint Time NFT</Button>
      </div>
    </div>
  );
};

export default Nft;
