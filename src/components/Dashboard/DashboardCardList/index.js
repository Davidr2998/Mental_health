import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./DashboardCardList.css";

const DashboardCardList = () => {
  const cards = [
    {
      id: 1,
      professional: "Kevin Victoria Ortiz",
      img: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg",
    },
    {
      id: 2,
      professional: "Juan David Rojas",
      img: "https://uifaces.co/our-content/donated/KtCFjlD4.jpg",
    },
    {
      id: 3,
      professional: "Manuel José Tovar",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86lxEZoHE9uD_sDyp-7RdIcnBU39dskZIGkbv1oRt5AKlkGgqfPJqcFgsetF-_RDmq4RKxaQ77SC1qe5mfJnBB84yAn0R6Yultg&usqp=CAU&ec=45732304",
    },
    {
      id: 4,
      professional: "Jhosua Pachon",
      img: "https://s3.amazonaws.com/37assets/svn/1409-MB-PASSPORT.jpg",
    },
    {
      id: 5,
      professional: "Juan Carlos Martinez",
      img:
        "https://uploads-ssl.webflow.com/5ad6544317498fedbb7f2e85/5ad6544317498fd10e7f2f2d_face19.jpg",
    },
    {
      id: 6,
      professional: "Jesus Guerra",
      img: "https://avatars1.githubusercontent.com/u/580084?s=400&v=4",
    },
    {
      id: 7,
      professional: "Martin Martinez",
      img: "https://dywv9vtiprlpm.cloudfront.net/images/_tmp/man-user-2.jpeg",
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
