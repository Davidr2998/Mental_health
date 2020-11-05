import React from "react";
import "./Button.css";

const Button = ({ text, url }) => {
  return (
    <div>
      <a href={url}>
        <button className="o-button">{text}</button>
      </a>
    </div>
  );
};

export default Button;
