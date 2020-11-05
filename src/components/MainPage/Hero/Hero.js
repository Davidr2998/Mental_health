import React from "react";
import "./Hero.css";
import CardButton from "../ServiceSection/Servicecard/CardButton/CardButton";
const Hero = () => {
  return (
    <div className="main-container">
      <div className="left-container-body">
        <div className="o-panel-body">
          <h1>
            Gran comunidad de psicólogos <br />
            Dispuestos a ayudarte.
          </h1>
          <p>
            Registrate hoy mismo para recibir asistencia psicológica de la
            comunidad más grande profesionales dispuestos a ayudarte.
          </p>
          <div className="o-call-to-action">
            <input type="text" name="" id="" />
            <CardButton text="Enviar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
