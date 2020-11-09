import React from 'react';
import './MessageWelcome.css';
import Usericon from '../NavbarCp/UserIcon.js';
import Messagetext from './MessageText.js';
/**
 * JGD 
 */

const Messagewelcome = ({Namereciversecond}) =>(
    <div className ="o-big-container">
        <div className="o-message-container">
            <Usericon></Usericon>
            <Messagetext nameU = {Namereciversecond}></Messagetext>
        </div>
    </div>
);

export default Messagewelcome;