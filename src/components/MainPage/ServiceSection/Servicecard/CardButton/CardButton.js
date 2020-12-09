import React, {useState} from "react";
import "./CardButton.css";

const CardButton = ({ onClick, text, professional }) => {
 
  return (
    <div>
      <button
        className={
          professional ? "o-button-dashboard-contact" : "o-button-readmore"
        } onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CardButton;
