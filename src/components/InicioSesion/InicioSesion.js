import React from "react";
import Title from "../Title/Title";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import "./InicioSesion.css";

function InicioSesion() {
  return (
    <div className="o-login-main-container">
      <div className="o-login-container">
        <div className="o-login-left-panel">
          <div className="o-form-container">
            <Title tipo="Bienvenido a Rapport"></Title>
            <TextField title="Ingresa tu correo eléctronico"></TextField>
            <TextField title="Contraseña"></TextField>
            <Button text="Iniciar Sesión"></Button>
            <hr></hr>
            <p className="o-login-label">¿No tienes una cuenta?</p>
            <Button text="Regístrate" url="Registro" border />
          </div>
        </div>
        <div className="o-login-right-panel">
          <img
            src="https://news.blr.com/app/uploads/sites/3/2020/01/psychologist.jpg"
            alt="Imagen de inicio de sesion"
          />
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
