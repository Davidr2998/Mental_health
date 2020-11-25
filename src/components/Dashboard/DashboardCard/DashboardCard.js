import React from "react";
import CardTitle from "../../MainPage/ServiceSection/Servicecard/CardTitle/CardTitle";
import CardButton from "../../MainPage/ServiceSection/Servicecard/CardButton/CardButton";
import "./DashboardCard.css";

const DashboardCard = ({ professional, img }) => {
  return (
    <div className="o-dashboard-card-container">
      <div className="o-dashboard-card">
        <img src={img} alt="Usuario" />
        <div className="o-dashboard-card-body">
          <CardTitle title={professional} professional />
          <CardButton text="Contactar" professional />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
