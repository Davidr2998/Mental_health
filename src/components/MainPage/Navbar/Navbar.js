import React from "react";
import "./Navbar.css";
import AppTitle from "../../AppTitle/AppTitle";
import Button from "../../Button/Button";
import NavbarOption from "./NavbarOption/NavbarOption";
import BorderButton from "../../BorderButton/BorderButton";

const Navbar = () => {
  return (
    <div className="o-navbar-container">
      <nav className="o-nav">
        <AppTitle name="Rapport" />
        <div className="o-nav-options">
          <NavbarOption option="Inicio" />
          <NavbarOption option="Servicios" />
          <NavbarOption option="Contacto" />
        </div>
        <div className="o-nav-actions">
          <BorderButton text="Ingresar" url="Ingreso" />
          <Button text="Registrarse" url="Registro" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
