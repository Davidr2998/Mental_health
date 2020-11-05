import React from "react";
import "./SectionTitle.css";

const SectionTitle = (props) => {
  const { sectionTitle } = props;
  return (
    <div className="o-section-title-container">
      <h2>{sectionTitle}</h2>
    </div>
  );
};

export default SectionTitle;
