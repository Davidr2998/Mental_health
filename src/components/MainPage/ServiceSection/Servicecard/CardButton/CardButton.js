import React from "react";
import "./CardButton.css";

const CardButton = ({ text, professional }) => {
  return (
    <div>
      <button
        className={
          professional ? "o-button-dashboard-contact" : "o-button-readmore"
        }
      >
        {text}
      </button>
    </div>
  );
};

export default CardButton;
