import React from 'react';
import './MessageContainer.css';
import Messagecommunity from './MessageCommunity.js';

/**
 * JGD 
 */

const Messagecontainer = ({Messagereciver}) =>(
    
    <div>
    <Messagecommunity Message ={Messagereciver}></Messagecommunity>
    <Messagecommunity Message ={Messagereciver}></Messagecommunity>
    <Messagecommunity Message ={Messagereciver}></Messagecommunity>
    </div>
    
)
export default Messagecontainer;