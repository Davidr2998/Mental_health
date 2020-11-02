import React from "react";

const AppTitle = (props) => {
  const { name } = props;
  return (
    <div className="o-app-title-container">
      <h2>{name}</h2>
    </div>
  );
};

export default AppTitle;
