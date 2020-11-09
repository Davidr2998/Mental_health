import React from 'react';
import './CardContainerDates.css';
import Cardcomponentdates from './CardComponentDates.js';

/**
 * JGD 
 */

const Cardcontainerdates = ({Namemdreciver, Horareciver, Fechareciver}) =>(
    
    <div className="o-cards-container">
        <Cardcomponentdates Fecha={Fechareciver} Hora={Horareciver} Namemd={Namemdreciver}></Cardcomponentdates>
        <Cardcomponentdates Fecha={Fechareciver} Hora={Horareciver} Namemd={Namemdreciver}></Cardcomponentdates>
        <Cardcomponentdates Fecha={Fechareciver} Hora={Horareciver} Namemd={Namemdreciver}></Cardcomponentdates>
    </div>
    
)
export default Cardcontainerdates;