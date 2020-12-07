import React, { useState, useEffect, useCallback } from "react";
import CardTitle from "../../MainPage/ServiceSection/Servicecard/CardTitle/CardTitle";
import CardButton from "../../MainPage/ServiceSection/Servicecard/CardButton/CardButton";
import "./DashboardCard.css";
import axios from "axios";
import { Modal } from "../../Modal/Modal";

const DashboardCard = ({
  professional,
  img,
  text,
  appointment,
  typeofcard,
}) => {
  const [info, setInfo] = useState([]);

  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(true);
  };

  const fecthApiData = useCallback(async () => {
    const result = await axios.get("/rapportCommunity");
    setInfo(result.data.userTweet);
  }, []);

  useEffect(() => {
    if (setInfo) fecthApiData();
  }, [fecthApiData, setInfo]);

  return (
    <>
      <div className="o-dashboard-card-container">
        {typeofcard !== "community" && (
          <div
            className={
              appointment
                ? "o-dashboard-card o-appointment-card"
                : "o-dashboard-card"
            }
          >
            <img src={img} alt="Usuario" />
            <div className="o-dashboard-card-body">
              <CardTitle title={professional} professional />
              {appointment && <p>{appointment}</p>}
              <CardButton text={text} onClick={onClick} professional />
            </div>
          </div>
        )}

        {typeofcard === "community" && (
          <ul>
            {info.map((i, index) => (
              <li key={index}>
                <div className="o-twitter-card">
                  <CardTitle title={i.username} professional />
                  <p>{i.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {active && (
        <Modal active={active} close={() => setActive(false)}>
          <div className="o-appointment">
            <h3>Información de la cita</h3>
          </div>
          <div className="o-appointment-info">
             <img
              src="/assets/img/user.svg"
              className="o-icon"
              alt="Icono de calendario"
            />
            <h4 className="o-appointment-title">Psicólogo</h4>
            </div>
            <p>Jose Alvarez Henao</p>
          <div className="o-appointment-info">
            <img
              src="/assets/img/calendar.svg"
              className="o-icon"
              alt="Icono de calendario"
            />
            <h4 className="o-appointment-title">Fecha</h4>
            </div>
            <p>7 de Diciembre del 2020</p>
          <div className="o-appointment-info">
            <img
              src="/assets/img/clock.svg"
              className="o-icon"
              alt="Icono de calendario"
            />
            <h4 className="o-appointment-title">Hora</h4> 
          </div>
          <p>5:00 PM</p>
          <div className="o-btn-appointment">
            <CardButton text="Ingresar"></CardButton>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DashboardCard;
