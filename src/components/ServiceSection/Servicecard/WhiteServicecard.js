import React from "react";
import "./WhiteServicecard.css";
import CardButton from "./CardButton/CardButton";
import CardDescription from "./CardDescription/CardDescription";
import CardTitle from "./CardTitle/CardTitle";
import CardImage from "./CardImage/CardImage";

const WhiteServicecard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="o-white-card-container">
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardDescription description={description} />
      <div className="o-button-container">
        <CardButton />
      </div>
    </div>
  );
};

export default WhiteServicecard;
