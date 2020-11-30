import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./DashboardCardList.css";

const DashboardCardList = () => {
  const cards = [
    {
      id: new Date().getMilliseconds,
      professional: "Kevin Victoria Ortiz",
      img: "/assets/img/prof.jpg",
    },
    {
      id: new Date().getMilliseconds,
      professional: "Juan David Rojas",
      img: "/assets/img/prof.jpg",
    },
    {
      id: new Date().getMilliseconds,
      professional: "Manuel José Tovar",
      img: "/assets/img/prof.jpg",
    },
    {
      id: new Date().getMilliseconds,
      professional: "Jhosua Pachon",
      img: "/assets/img/prof.jpg",
    },
  ];
  return (
    <ul className="o-cardlist-container">
      {cards.map((card) => (
        <li key={card.id}>
          <DashboardCard
            professional={card.professional}
            img={card.img}
            text="Contactar"
          />
        </li>
      ))}
    </ul>
  );
};

export default DashboardCardList;
