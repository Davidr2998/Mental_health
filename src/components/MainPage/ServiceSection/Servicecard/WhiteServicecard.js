import React from "react";
import "./WhiteServicecard.css";
import CardButton from "./CardButton/CardButton";
import CardDescription from "./CardDescription/CardDescription";
import CardTitle from "./CardTitle/CardTitle";
import CardImage from "./CardImage/CardImage";

const WhiteServicecard = (props) => {
  const { image, title, description, btntxt } = props;
  return (
    <div className="o-white-card-container">
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardDescription description={description} />
      <CardButton text={btntxt} />
    </div>
  );
};

export default WhiteServicecard;
