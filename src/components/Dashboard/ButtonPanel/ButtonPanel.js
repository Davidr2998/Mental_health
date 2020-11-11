import React from "react";
import Button from "../../Button/Button";
import "./ButtonPanel.css";

const ButtonPanel = ({ btntxt1, btntxt2, btntxt3 }) => {
  return (
    <div className="o-button-panel-container">
      <Button text={btntxt1} panel panelLeft />
      <Button text={btntxt2} panel panelCenter />
      <Button text={btntxt3} panel panelRight />
    </div>
  );
};

export default ButtonPanel;
