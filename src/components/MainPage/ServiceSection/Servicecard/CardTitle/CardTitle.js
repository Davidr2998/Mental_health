import React from "react";
import "./CardTitle.css";

const CardTitle = ({ title, professional }) => {
  return (
    <div
      className={
        professional ? "o-dashboard-professional-name" : "o-title-container"
      }
    >
      <h3>{title}</h3>
    </div>
  );
};

export default CardTitle;
