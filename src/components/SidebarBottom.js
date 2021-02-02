import React from 'react';
import './SidebarBottom.css';
import ModuleHistory from './ModuleHistory';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Divider } from '@material-ui/core';

const SidebarBottom = () => {
    return (
        <div className="sidebarBottom">
            <div className="sidebarBotttom__header">
                <ModuleHistory Icon={AssignmentIcon} title="Module History" />
            </div>
            <Divider />

            <div>
                <ul className="sidebarBotttom__header--item">
                <li>
                <ModuleHistory history="Searched Jurnal Entries On Division Module" duration="22:10 15/09/2020" method="web" />
                </li>
                <li>
                <ModuleHistory history="Searched Fingerprint Record On Division Module" duration="22:10 15/09/2020" method="web" />
                </li>
                <li>
                <ModuleHistory history="Searched Jurnal Entries on Division Module" duration="22:10 15/09/2020" method="web" />
                </li>
            </ul>            
            </div>
        </div>
    )
}

export default SidebarBottom;