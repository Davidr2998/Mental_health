import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import "./OptionContainer.css";

const OptionContainer = ({ paneltitle }) => {
  return (
    <div className="o-optcontainer-main-container">
      <ButtonPanel
        btntxt1="Directorio de profesionales"
        btntxt2="Mis citas"
        btntxt3="Comunidad"
      />

      <div className="o-optcontainer-body">
        <SectionTitle sectionTitle={paneltitle} panel />
      </div>
    </div>
  );
};

export default OptionContainer;
