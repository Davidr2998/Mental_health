import React from 'react';
import './CardComponentM.css';
import md from '../images/psicologo.svg';

/**
 * JGD 
 */

const Cardcomponentm = ({Namemd}) =>(
    
    <div className="o-card-containerm">
        <div className ="o-image-md">
            <img src={md} className="o-img-md" alt= "Foto del psicologo" />
        </div>
        <div className="o-text-items">
            <h5>{Namemd}</h5>
            <button className ="o-button-card">Contactar</button>
        </div>
    </div>
    
)
export default Cardcomponentm;