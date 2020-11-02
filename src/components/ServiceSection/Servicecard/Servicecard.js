import React from "react";
import "./Servicecard.css";
import CardButton from "./CardButton/CardButton";
import CardDescription from "./CardDescription/CardDescription";
import CardTitle from "./CardTitle/CardTitle";
import CardImage from "./CardImage/CardImage";

const Servicecard = (props) => {
  const { image, title, description, btntxt } = props;
  return (
    <div className="o-card-container">
      <CardImage image={image} />
      <CardTitle title={title} />
      <CardDescription description={description} />
      <CardButton text={btntxt} />
    </div>
  );
};

export default Servicecard;
