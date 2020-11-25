import React from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = ({ username }) => {
  return (
    <div className="o-welcome-message-container">
      <img
        src="/assets/img/prof.jpg"
        alt="Profile"
        className="o-welcome-message-usericon"
      />
      <div className="o-welcome-message-body">
        <h1>Bienvenido {username}</h1>
        <p>¿Qué planes tienes para el día de hoy?</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
