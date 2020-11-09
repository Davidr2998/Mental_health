import React from 'react';
import './ContainerBoardCom.css';
import Buttonspages from '../BoardDCp/ButtonsPages.js';
import Titlecontainer from '../BoardDCp/TitleContainer.js';
import Messagecontainer from './MessageContainer.js';

/**
 * JGD 
 */

const Containerboardcom = ({Namereciver, Messagesender}) =>(
    
    <div className="o-shape-container">
        <div className="o-container-board">
            <Buttonspages url1="Dashboard" url2="Dates" url3="Community"></Buttonspages>
            <Titlecontainer Nametitle ={Namereciver} ></Titlecontainer>
            <Messagecontainer Messagereciver={Messagesender}></Messagecontainer>
        </div>
    </div>
    
)
export default Containerboardcom;