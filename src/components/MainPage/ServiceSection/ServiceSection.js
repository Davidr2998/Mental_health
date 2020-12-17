import React, { Component } from "react";
import "./ServiceSection.css";
import Servicecard from "./Servicecard/Servicecard";
import SectionTitle from "../../SectionTitle/SectionTitle";

class ServiceSection extends Component {
  render() {
    return (
      <div className="o-service-container">
        <SectionTitle sectionTitle="Nuestros servicios" />
        <div className="o-services">
          <Servicecard
            image="/assets/img/camera.svg"
            title="Terapia psicológica y psiquiátricas online"
            description="No importa si quieres hablar con un experto sobre cuestiones generales de la vida, sus preocupaciones, miedos o deseos. Ofrecemos asesoramiento psicológico profesional en las situaciones más diversas."
            btntxt="Conoce más"
            background
          />
          <Servicecard
            image="/assets/img/corazon.svg"
            title="Profesionales altamente calificados"
            description="Conectate con profesionales capacitados en las situaciones más diversas con citas flexibles y disponibles las 24 horas."
            btntxt="Conoce más"
          />
          <Servicecard
            image="/assets/img/persona.svg"
            title="Programas y prácticas para tu ayuda"
            description="Ofrecemos distintos programas para combatir el estres y encontrar la serenidad, prácticas especificas para aprender a meditar y disitntos recursos para mejorar tu autoestima y tu rendimiento."
            btntxt="Conoce más"
            background
          />
        </div>
      </div>
    );
  }
}

export default ServiceSection;
