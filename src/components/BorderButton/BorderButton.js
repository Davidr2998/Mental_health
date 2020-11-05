import React from "react";
import "./BorderButton.css";

const BorderButton = (props) => {
  const { text, url } = props;
  return (
    <div>
      <a href={url}>
        <button className="o-border-button">{text}</button>
      </a>
    </div>
  );
};

export default BorderButton;
