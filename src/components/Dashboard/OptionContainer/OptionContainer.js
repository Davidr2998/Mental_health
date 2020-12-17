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
            professional="Jose Alvarez Henao"
            img="https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg"
            text="Información"
            appointment="5:00 PM"
          />

          <DashboardCard
            professional="Carlos Henao"
            img="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg"
            text="Información"
            appointment="12:30 PM"
          />

          <DashboardCard
            professional="Andres Rodriguez"
            img="https://ak.picdn.net/shutterstock/videos/21124222/thumb/10.jpg"
            text="Información"
            appointment="2:45 PM"
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
