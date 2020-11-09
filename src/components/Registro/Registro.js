import React from "react";
import Title from "../Title/Title";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import "../Registro/Registro.css";

function Registro() {
  return (
    <div className="o-register-main-container">
      <div className="o-register-container">
        <div className="o-register-left-panel">
          <div className="o-register-form-container">
            <Title tipo="Regístrate en Rapport" />
            <TextField title="Ingresa tu correo eléctronico" />
            <TextField title="Ingresa tu contraseña" />
            <TextField title="Confirma tu contraseña" />
            <Button text="Regístrate"></Button>
            <hr />
            <p className="o-register-label">¿Ya tienes una cuenta?</p>
            <Button text="Iniciar Sesión" url="Ingreso" border />
          </div>
        </div>
        <div className="o-register-right-panel">
          <img
            src="https://peopleproblems.ca/wp/wp-content/uploads/2018/09/65108776_m-1-1024x683.jpg"
            alt="Imagen de registro"
          />
        </div>
      </div>
    </div>
  );
}

export default Registro;
