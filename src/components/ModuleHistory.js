import React from 'react';
import './ModuleHistory.css';


const ModuleHistory = ({Icon, title, history, duration, method}) => {
    return (
        <div className="moduleHistory">
           <div className="moduleHistory__header">
               {Icon && <Icon />}
               <h4>{title}</h4>
           </div>
            <h5>{history}</h5>
            <div className="moduleHistory__time">
                <h6 className="moduleHistory__time--duration">
                {duration}
                </h6>
                <ul>
                    <li><h6>{method}</h6></li>
                </ul>
            </div>
        </div>
    )
}

export default ModuleHistory;
