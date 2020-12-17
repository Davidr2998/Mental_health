import React from "react";
import "./Servicecard.css";
import CardButton from "./CardButton/CardButton";
import CardDescription from "./CardDescription/CardDescription";
import CardTitle from "./CardTitle/CardTitle";
import CardImage from "./CardImage/CardImage";

const Servicecard = ({ image, title, description, btntxt, background }) => {
  return (
    <div className={background ? "o-card-container" : "o-white-card-container"}>
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardDescription description={description} />
      <CardButton text={btntxt} />
    </div>
  );
};

export default Servicecard;
