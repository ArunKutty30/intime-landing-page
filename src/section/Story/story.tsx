import React from "react";
import "./story.scss";
import meta from "../../assets/images/meta.jpg";
import Button from "../../components/Button/button";

const Story = () => {
  return (
    <div className="story">
      <div className="content">
        <div className="left_block">
          <h1>STORYLINE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facere, corrupti ut reiciendis consequatur maiores deleniti,
            pariatur, et optio eaque perspiciatis veniam? Est quia nisi soluta,
            sunt vero quam saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facere, corrupti ut reiciendis consequatur maiores deleniti,
            pariatur, et optio eaque perspiciatis veniam? Est quia nisi soluta,
            sunt vero quam saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facere, corrupti ut reiciendis consequatur maiores deleniti,
            pariatur, et optio eaque perspiciatis veniam? Est quia nisi soluta,
            sunt vero quam saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facere, corrupti ut reiciendis consequatur maiores deleniti,
            pariatur, et optio eaque perspiciatis veniam? Est quia nisi soluta,
            sunt vero quam saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            facere, corrupti ut reiciendis consequatur maiores deleniti,
            pariatur, et optio eaque perspiciatis veniam? Est quia nisi soluta,
            sunt vero quam saepe.
          </p>
        
         

          <Button>READ MORE</Button>
        </div>
      <div className="right_block">
      <img src={meta} alt='meta'></img>

      </div>
    
      </div>
    </div>
  );
};

export default Story;
