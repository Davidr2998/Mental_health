import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./DashboardCardList.css";

const DashboardCardList = () => {
  const cards = [
    {
      id: 1,
      professional: "Kevin Victoria Ortiz",
      img: "/assets/img/prof.jpg",
    },
    {
      id: 2,
      professional: "Juan David Rojas",
      img: "/assets/img/prof.jpg",
    },
    {
      id: 3,
      professional: "Manuel José Tovar",
      img: "/assets/img/prof.jpg",
    },
    {
      id: 4,
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
