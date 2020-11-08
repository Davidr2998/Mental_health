import React from 'react';
import './CardContainerM.css';
import Cardcomponentm from './CardComponentM.js';

/**
 * JGD 
 */

const Cardcontainerm = ({Namemdreciver}) =>(
    
    <div className="o-cards-container">
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
        <Cardcomponentm Namemd={Namemdreciver}></Cardcomponentm>
    </div>
    
)
export default Cardcontainerm;