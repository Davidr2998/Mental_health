import React from 'react';
import logo from '../images/cerebro.svg';
import './LogoRapport.css';
/**
 * JGD 
 */

const Logorapport = () =>(
    <div className="o-items-container-logos">
        <div className="o-icon-logo">
            <img src={logo} alt= "Foto del user" />
        </div>
        <h1>Rapport</h1>
    </div>
)
export default Logorapport;