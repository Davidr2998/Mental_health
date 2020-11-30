import React, { useState, useEffect } from "react";
import CardTitle from "../../MainPage/ServiceSection/Servicecard/CardTitle/CardTitle";
import CardButton from "../../MainPage/ServiceSection/Servicecard/CardButton/CardButton";
import "./DashboardCard.css";
import axios from "axios";

const DashboardCard = ({
  professional,
  img,
  text,
  appointment,
  typeofcard,
}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => fecthApiData(), []);

  const fecthApiData = async () => {
    const result = await axios.get("/rapportCommunity");
    setInfo(result.data.userTweet);
  };

  return (
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
            <CardButton text={text} professional />
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
  );
};

export default DashboardCard;
