import React from "react";
import Navbar from "../MainPage/Navbar/Navbar";
import "./Dashboard.css";
import OptionContainer from "./OptionContainer/OptionContainer";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";

const Dashboard = () => {
  return (
    <div className="o-dashboard-container">
      <Navbar isLoggedIn={true} username="Juan David Rojas" />
      <WelcomeMessage username="Juan David Rojas" />
      <OptionContainer paneltitle="DIRECTORIO DE PROFESIONALES" />
    </div>
  );
};

export default Dashboard;
