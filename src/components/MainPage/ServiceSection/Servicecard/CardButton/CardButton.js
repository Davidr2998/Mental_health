import React from "react";
import "./CardButton.css";

const CardButton = (props) => {
  const { text } = props;
  return (
    <div>
      <button className="o-button-readmore">{text}</button>
    </div>
  );
};

export default CardButton;
