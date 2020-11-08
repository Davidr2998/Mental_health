import React from 'react';

import Rapportnavbar from '../NavbarCp/RapportNavbar.js';
import Messagewelcome from '../MessageCp/MessageWelcome.js';
import Containerboard from '../BoardDCp/ContainerBoard.js';
import '../Pages/Dashboard.css';
/**
 * JGD 
 */

function Dashboard() {
  return (
  <div>
   <Rapportnavbar Nuserreciver = 'Juan David Rojas'></Rapportnavbar>
   <Messagewelcome Namereciversecond = 'Juan David Rojas'></Messagewelcome>
   <Containerboard Namereciver = 'DIRECTORIO PROFESIONALES' Namemdsend='Nombre Apellido'> </Containerboard>
  </div>
  )}

export default Dashboard;