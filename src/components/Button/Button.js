import React from "react";
import "./Button.css";

const Button = ({ text, url, border }) => {
  return (
    <div>
      <a href={url}>
        <button className={border ? "o-border-button" : "o-button"}>
          {text}
        </button>
      </a>
    </div>
  );
};

export default Button;
