import React from 'react';
import './Sidebar.css';
import DivisionSummary from './DivisionSummary';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import PlaceIcon from '@material-ui/icons/Place';
import BallotIcon from '@material-ui/icons/Ballot';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Divider } from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <DivisionSummary Icon={ MeetingRoomIcon } title="Division Summary"/>
            </div>
            <Divider />
            <div>
            <DivisionSummary Icon={LocalPhoneIcon} title="+2348012345678"/>
            <DivisionSummary Icon={EmailIcon} title="asbfefr@gmail.com"/>
            <DivisionSummary Icon={PlaceIcon} title="mojidi, lagos"/>
            <DivisionSummary Icon={BallotIcon} title="2 jurnal entries"/>
            <DivisionSummary Icon={FingerprintIcon} 
            title="24 fingerprints enrolled" />
            </div>
        </div>
    )
} 

export default Sidebar;

