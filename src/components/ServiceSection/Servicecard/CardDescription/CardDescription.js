import React from "react";
import "./CardDescription.css";

const CardDescription = (props) => {
  const { description } = props;
  return (
    <div className="o-description-container">
      <p>{description}</p>
    </div>
  );
};

export default CardDescription;
