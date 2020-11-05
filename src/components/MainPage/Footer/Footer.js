import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="o-footer">
      <div className="o-footer-leftside">
        <p>
          Rappert es la plataforma de psicología online para el asesoramiento
          psicológico, la terapia y el coaching online. A través de Rappert
          usted encontrará psicólogos que le tratarán a traves de consultas por
          videoconferencia, chat, email o teléfono. Le ofrecemos la posibilidad
          de encontrar psicólogos, psicoterapeutas y psiquiatras online,
          cualificados y certificados con sólo unos clics del ratón y de
          consultar directamente en línea, a través de videoconferencia, chat de
          texto o correo electrónico. Sencillo, cómodo y sin largos tiempos de
          espera. Sin descarga de software.
        </p>
      </div>

      <div className="o-footer-rightside">
        <p>
          Registrate hoy mismo para recibir asistencia psicologica de la
          comunidad mas grande profesionales dispuestos a ayudarte.
        </p>
        <div className="o-social-media-container">
          <img src="/assets/img/facebook.png" alt="Facebook" />
          <img src="/assets/img/twitter.png" alt="Twitter" />
          <img src="/assets/img/Google.png" alt="Google" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
