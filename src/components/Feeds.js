import React from 'react';
import './Feeds.css';
// import InfoContents from './InfoContents';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';



const Feeds = () => {
    return (
        <div className="feeds">
            <div className="feeds__header">
                <input type="checkbox" checked />
                <h5>NAME</h5>
                <h5>LOCATION</h5>
                <h5>STATUS</h5>
                <h5>ENTRIES</h5>
                <h5>RISK PROFILE</h5>
            </div>
            <div className="feeds__content">
                {/* row 1 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Curtney Henry</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>775 Rolling green road</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: '#2eb1f4', textTransform: 'capitalize'}}>no issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>19 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <CallReceivedIcon fontSize="small" style={{color: '#27ae60'}}/>
                        <h5 style={{color: '#27ae60', textTransform: 'capitalize'}}>low risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 2 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5 style={{color: '#1a1a1a', textTransform: 'capitalize'}}>darrell steward</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>7529 E, Pecan St.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'gold', textTransform: 'capitalize'}}>2 issues found</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>10 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <ArrowForwardIcon fontSize="small" style={{color: 'navy'}}/>
                        <h5 style={{color: 'navy', textTransform: 'capitalize'}}>mid risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 3 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Cody Fisher</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>3605 Parker Rd.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: '#2eb1f4', textTransform: 'capitalize'}}>no issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>8 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <ArrowForwardIcon fontSize="small" style={{color: 'navy'}}/>
                        <h5 style={{color: 'navy', textTransform: 'capitalize'}}>mid risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 4 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Bessie Cooper</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>75 Rolling Green Rd.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'gold', textTransform: 'capitalize'}}>1 issue</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>12 unique entres</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <ArrowUpwardIcon fontSize="small" style={{color: 'orangered'}}/>
                        <h5 style={{color: 'orangered', textTransform: 'capitalize'}}>high risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 5 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Annette Black</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>8080 Rallroad St.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'blue', textTransform: 'capitalize'}}>no issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>13 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <CallReceivedIcon fontSize="small" style={{color: '#27ae60'}}/>
                        <h5 style={{color: '#27ae60', textTransform: 'capitalize'}}>low risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 6 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Jenny Wilson</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>8080 Rallroad St.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'gold', textTransform: 'capitalize'}}>5 issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>18 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <ArrowUpwardIcon fontSize="small" style={{color: 'orangered'}}/>
                        <h5 style={{color: '#27ae60', textTransform: 'capitalize'}}>high risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 7 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Darlene Robertson</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>3890 Poplar Dr.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'gold', textTransform: 'capitalize'}}>2 issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>6 unique entries</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <ArrowForwardIcon fontSize="small" style={{color: 'navy'}}/>
                        <h5 style={{navy: 'navy', textTransform: 'capitalize'}}>low risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
                {/* row 8 */}
                <div className="feeds__contentInfo">
                    <input type="checkbox"/>
                    <div className="dropdown--icon">
                        <KeyboardArrowDownIcon fontSize="small" style={{color: 'gray'}}/>
                    </div>
                    <h5>Ralph Edward</h5>
                    <div className="feeds__content--item">
                        <h5>Lagos State</h5>
                        <h6 style={{color: 'gray'}}>8558 Green Rd.</h6>
                    </div>
                    <div className="feeds__content--item fault">
                        <h4 style={{color: 'blue', textTransform: 'capitalize'}}>no issues</h4>
                    </div>
                    <div className="feeds__content--item">
                        <ul>
                            <li><h5>14 unique entres</h5></li>
                            <h5 style={{color: 'gray'}}>homogeneous</h5>
                        </ul>
                    </div>
                    <div className="feeds__content--item">
                        <CallReceivedIcon fontSize="small" style={{color: '#27ae60'}}/>
                        <h5 style={{color: '#27ae60', textTransform: 'capitalize'}}>low risk</h5>
                    </div>
                    <div className="feeds__content--more">
                        <IconButton className="feeds__content--more">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds;