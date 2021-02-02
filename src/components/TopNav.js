import React from 'react';
import './TopNav.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button } from '@material-ui/core';

function TopNav() {
    return (
        <div className="topNav">
            <div className="topNav__contents">
                <Button className="topNav__contents--entry">Entries</Button>
                <ArrowForwardIosIcon className="next--icon" fontSize="small" />
                <Button style={{ color: 'orangered' }}>Divisions</Button>
            </div>
        </div>
    )
}

export default TopNav;
