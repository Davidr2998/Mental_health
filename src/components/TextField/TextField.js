import React from "react";
import "../TextField/TextField.css";

const TexField = ({ title }) => {
  return (
    <div className={title ? "o-textfield-container" : "o-untitled-textfield"}>
      {title && <h4 className="o-subtitle-text">{title}</h4>}
      <input type="text" className="o-text-field" />
    </div>
  );
};

export default TexField;
