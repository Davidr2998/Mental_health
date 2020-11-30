import React, { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./OptionContainer.css";
import Button from "../../Button/Button";
import DashboardCardList from "../DashboardCardList";

const OptionContainer = () => {
  const [Directory, setDirectory] = useState(true);
  const [Appointment, setAppointment] = useState(false);
  const [Community, setCommunity] = useState(false);

  const changeToDirectory = () => {
    setDirectory(!Directory);
    setAppointment(false);
    setCommunity(false);
  };

  const changeToAppointments = () => {
    setAppointment(!Appointment);
    setDirectory(false);
    setCommunity(false);
  };

  const changeToCommunity = () => {
    setCommunity(!Community);
    setAppointment(false);
    setDirectory(false);
  };

  return (
    <div className="o-optcontainer-main-container">
      <div className="o-button-panel-container">
        <Button
          text="Directorio de profesionales"
          panel
          panelLeft
          onClick={changeToDirectory}
        />
        <Button
          text="Mis citas"
          panel
          panelCenter
          onClick={changeToAppointments}
        />
        <Button text="Comunidad" panel panelRight onClick={changeToCommunity} />
      </div>
      {Directory === true && (
        <div className="o-optcontainer-body">
          <SectionTitle sectionTitle="DIRECTORIO DE PROFESIONALES" panel />
          <DashboardCardList />
        </div>
      )}

      {Appointment === true && (
        <div className="o-optcontainer-body">
          <SectionTitle sectionTitle="MIS CITAS" panel />
          <DashboardCard
            professional="Juan David Rojas"
            img="/assets/img/prof.jpg"
            text="Entrar"
            appointment="12:00pm"
          />
        </div>
      )}

      {Community === true && (
        <div className="o-optcontainer-body">
          <SectionTitle sectionTitle="COMUNIDAD" panel />
          <DashboardCard
            professional="Jhosua pachon"
            img="/assets/img/prof.jpg"
            typeofcard="community"
          />
        </div>
      )}
    </div>
  );
};

export default OptionContainer;
