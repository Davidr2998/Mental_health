import React from "react";
import "./CardComponentM.css";
import md from "../images/psicologo.jpg";
import Button from "../../Button/Button";

/**
 * JGD
 */

const Cardcomponentm = ({ Namemd }) => (
  <div className="o-card-containerm">
    <div className="o-image-md">
      <img src={md} className="o-img-md" alt="Foto del psicologo" />
    </div>
    <div className="o-text-items">
      <h5>{Namemd}</h5>
      <Button text="Contactar" />
    </div>
  </div>
);
export default Cardcomponentm;
