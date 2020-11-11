import React from "react";
import "./Button.css";

const Button = ({
  text,
  url,
  border,
  panel,
  panelCenter,
  panelRight,
  panelLeft,
}) => {
  return (
    <div>
      {panel === false && (
        <a href={url}>
          <button className={border ? "o-border-button" : "o-button"}>
            {text}
          </button>
        </a>
      )}

      {panelCenter === true && (
        <a href={url}>
          <button className={"o-button-panel-center-button"}>{text}</button>
        </a>
      )}

      {panelRight === true && (
        <a href={url}>
          <button className={"o-button-panel-right-button"}>{text}</button>
        </a>
      )}

      {panelLeft === true && (
        <a href={url}>
          <button className={"o-button-panel-left-button"}>{text}</button>
        </a>
      )}
    </div>
  );
};

export default Button;
