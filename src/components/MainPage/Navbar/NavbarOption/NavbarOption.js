import React from "react";
import "./NavbarOptions.css";

const NavbarOption = (props) => {
  const { option } = props;
  return (
    <a href="www.google.com" className="o-option-container">
      <p className="o-option">{option}</p>
    </a>
  );
};

export default NavbarOption;
