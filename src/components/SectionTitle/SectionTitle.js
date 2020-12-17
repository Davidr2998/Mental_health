import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ sectionTitle, panel }) => {
  return (
    <div
      className={panel ? "o-section-panel-title" : "o-section-title-container"}
    >
      <h2>{sectionTitle}</h2>
    </div>
  );
};

export default SectionTitle;
