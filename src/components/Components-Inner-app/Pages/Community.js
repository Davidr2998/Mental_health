import React from 'react';
import Rapportnavbar from '../NavbarCp/RapportNavbar.js';
import Messagewelcome from '../MessageCp/MessageWelcome.js';
import Containerboardcom from '../BoardComCp/ContainerBoardCom.js';
/**
 * JGD 
 */

function Community() {
  return (
  <div>
   <Rapportnavbar Nuserreciver = 'Juan David Rojas'></Rapportnavbar>
   <Messagewelcome Namereciversecond = 'Juan David Rojas'></Messagewelcome>
   <Containerboardcom Namereciver = 'COMUNIDAD' Messagesender=' Esto es un mensaje de animo por parte de la comunidad'></Containerboardcom>
  </div>
  )}

export default Community;