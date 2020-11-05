import React from "react";
import "./CardImage.css";

const CardImage = (props) => {
  const { image } = props;
  return (
    <div className="o-image-container">
      <img src={image} alt="#" />
    </div>
  );
};

export default CardImage;
