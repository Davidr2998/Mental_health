import React from "react";
import "./CardTitle.css";

const CardTitle = (props) => {
  const { title } = props;
  return (
    <div className="o-title-container">
      <h3>{title}</h3>
    </div>
  );
};

export default CardTitle;
