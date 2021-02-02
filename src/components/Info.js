import React from 'react';
import './Info.css';


const Info = ({Icon}) => {
    return (
        <div className="info">
           {Icon && <Icon />}
        </div>
    )
}

export default Info;
