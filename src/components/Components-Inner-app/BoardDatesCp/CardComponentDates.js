import React from 'react';
import './CardComponentDates.css';
import md from '../images/psicologo.svg';

/**
 * JGD 
 */

const Cardcomponentdates = ({Namemd, Fecha, Hora}) =>(
    
    <div className="o-card-container1">
        <div className ="o-image-md1">
            <img src={md} className="o-img-md1" alt= "Foto del psicologo" />
        </div>
        <div className="o-text-items1">
            <h5 className="o-adjust1">Profesional{Namemd}</h5>
            <h6 className="o-adjust1">Fecha:{Fecha}</h6>
            <h6 className="o-adjust1">Hora:{Hora}</h6>
        </div>
        <div>
        <button className ="o-button-card1">Ingresar</button>
        </div>
    </div>
    
)
export default Cardcomponentdates;