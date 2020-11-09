import React from 'react';
import './ContainerBoardDates.css';
import Buttonspages from '../BoardDCp/ButtonsPages.js';
import Titlecontainer from '../BoardDCp/TitleContainer.js';
import Cardcontainerdates from './CardContainerDates.js';

/**
 * JGD 
 */

const Containerboarddates = ({Namereciver, Namemdsender, Horasender, Fechasender }) =>(
    
    <div className="o-shape-container">
        <div className="o-container-board">
            <Buttonspages url1="Dashboard" url2="Dates" url3="Community"></Buttonspages>
            <Titlecontainer Nametitle ={Namereciver} ></Titlecontainer>
            <Cardcontainerdates Namemdreciver ={Namemdsender} Horareciver={Horasender} Fechareciver={Fechasender}></Cardcontainerdates>
        </div>
    </div>
    
)
export default Containerboarddates;