import React from "react";
import "../TextField/TextField.css";

const TexField = (props) => {
  return (
    <div className="o-textfield-container">
      <h4 className="o-subtitle-text">{props.title}</h4>
      <input type="text" className="o-text-field" />
    </div>
  );
};

export default TexField;
