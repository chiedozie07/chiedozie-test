import React from 'react';
import './DivisionSummary.css';


const DivisionSummary = ({Icon, title}) => {
    return (
        <div className="divisionSummary">
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default DivisionSummary;
