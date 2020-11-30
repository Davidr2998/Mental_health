import React from "react";
import "./AppTitle.css";

const AppTitle = ({ name }) => {
  return (
    <div className="o-app-title-container">
      <h2 className="o-app-title">{name}</h2>
    </div>
  );
};

export default AppTitle;
