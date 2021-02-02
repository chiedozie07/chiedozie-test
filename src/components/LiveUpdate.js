import React from 'react';
import './LiveUpdate.css';
import InfoIcon from '@material-ui/icons/Info';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const LiveUpdate = () => {
    return (
        <div className="liveUpdate">
            {/* ongoing */}
            <div className="liveUpdate__items">
                <div className="liveUpdate__items--top">
                    <p>31454</p>
                    <InfoIcon className="info--icon" />
                </div>
                <h5>Ongoing metric</h5>
            </div>
            {/* past */}
            <div className="liveUpdate__items">
                <div className="liveUpdate__items--top">
                    <p>2344</p>
                    <InfoIcon className="info--icon" style={{ color: 'gold' }}/>
                </div>
                <h5>Past metric</h5>
            </div>
            {/* missed */}
            <div className="liveUpdate__items">
                <div className="liveUpdate__items--top">
                    <p>14224</p>
                    <InfoIcon className="info--icon" style={{ color: 'gray' }}/>
                </div>
                <h5>Missed metric</h5>
            </div>
            {/* failed */}
            <div className="liveUpdate__items">
                <div className="liveUpdate__items--top">
                    <p>635</p>
                    <InfoOutlinedIcon className="info--icon" style={{ color: 'orangered' }} />
                </div>
                <h5>Failed metric</h5>
            </div>
            {/* pending */}
            <div className="liveUpdate__items" style={{marginRight: '0px'}}>
                <div className="liveUpdate__items--top">
                    <p>11334</p>
                    <InfoTwoToneIcon className="info--icon" />
                </div>
                <h5>Pending metric</h5>
            </div>
            
        </div>
    )
}

export default LiveUpdate;
