import React from 'react';

import Rapportnavbar from '../NavbarCp/RapportNavbar.js';
import Messagewelcome from '../MessageCp/MessageWelcome.js';
import Containerboarddates from '../BoardDatesCp/ContainerBoardDates.js';

/**
 * JGD 
 */

function Dates() {
  return (
  <div>
   <Rapportnavbar Nuserreciver = 'Juan David Rojas'></Rapportnavbar>
   <Messagewelcome Namereciversecond = 'Juan David Rojas'></Messagewelcome>
   <Containerboarddates Namereciver = 'TUS CITAS' Namemdsender=' Nombre Apellido' Horasender=' 00-00-00' Fechasender=' 00-00-00'></Containerboarddates>
  </div>
  )}

export default Dates;