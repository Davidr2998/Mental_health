import React , { useState } from "react";
import Navbar from "../MainPage/Navbar/Navbar";
import "./Dashboard.css";
import OptionContainer from "./OptionContainer/OptionContainer";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import { Modal } from '../Modal/Modal.js';



const Dashboard = () => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    
    <div className="o-dashboard-container">
      <Navbar isLoggedIn={true} username="Juan David Rojas" />
      <WelcomeMessage username="Juan David Rojas" />
      <OptionContainer />

      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <button onClick={() => setShow(true) } className="btn-openModal" >Abrir Modal</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
};

export default Dashboard;
