import React from "react";
import "./Servicecard.css";
import CardButton from "./CardButton/CardButton";
import CardDescription from "./CardDescription/CardDescription";
import CardTitle from "./CardTitle/CardTitle";
import CardImage from "./CardImage/CardImage";

const Servicecard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="o-card-container">
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardDescription description={description} />
      <div className="o-button-container">
        <CardButton />
      </div>
    </div>
  );
};

export default Servicecard;
