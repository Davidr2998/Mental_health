import React from "react";
import "./Navbar.css";
import AppTitle from "../../AppTitle/AppTitle";
import Button from "../../Button/Button";

const Navbar = ({ isLoggedIn, username }) => {
  return (
    <div className="o-navbar-container">
      <nav className="o-nav">
        <AppTitle name="Rapport" />
        <div className="o-nav-options">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            {isLoggedIn === false && (
              <li>
                <a href="#">Servicios</a>
              </li>
            )}
            {isLoggedIn === false && (
              <li>
                <a href="#">Contacto</a>
              </li>
            )}
            {isLoggedIn === true && (
              <li>
                <a href="#">Perfil</a>
              </li>
            )}
          </ul>
        </div>
        <div className="o-nav-actions">
          {isLoggedIn === false && (
            <Button text="Ingresar" url="Ingreso" border panel={false} />
          )}
          {isLoggedIn === false && (
            <Button text="Registrarse" url="Registro" panel={false} />
          )}
          {isLoggedIn === true && (
            <div className="o-profile-container">
              <a href="#">{username}</a>
              <div className="o-profile-img-container">
                <img src="/assets/img/prof.jpg" alt="#" />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
