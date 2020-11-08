import React from 'react';
import './MessageCommunity.css';
import Usericon from '../NavbarCp/UserIcon.js';
/**
 * JGD 
 */

const Messagecommunity = ({Message}) =>(
    <div className ="o-big-containerCom">
        <div className="o-message-containerCom">
            <Usericon></Usericon>
            <p className="o-text-adjust">{Message}</p>
        </div>
    </div>
);

export default Messagecommunity;