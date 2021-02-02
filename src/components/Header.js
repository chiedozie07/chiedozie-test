import React from 'react';
import './Header.css';
import chiedozie from './images/chiedozie.jpg';
import HouseIcon from '@material-ui/icons/House';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PaymentIcon from '@material-ui/icons/Payment';//entries
import AmpStoriesIcon from '@material-ui/icons/AmpStories';//divisions
import {Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Brightness7OutlinedIcon from '@material-ui/icons/Brightness7Outlined';



const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                {/* <img className="logo" src="./images/fe logo.PNG" alt="logo" /> */}
                <Brightness7OutlinedIcon className="header__left--logo" style={{fontSize: '60px', fontWeight: 800, lineHeight: '60px', color: '#a4c27c', height: '40px', textAligh: 'center'}} />
                <div className="headerLeft__optionContainer">
                    <div className="headerLeft__item">
                        <HouseIcon style={{fontSize: '32px', color: 'blue'}} />
                        <p style={{ color: 'blue', fontWeight: 770 }}>Home</p>
                    </div>
                    <div className="headerLeft__item">
                        <PaymentIcon />
                        <p>Entries</p>
                    </div>
                    <div className="headerLeft__item">
                        <AmpStoriesIcon />
                        <p>Divisions</p>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__input">
                    <IconButton className="search--btn">
                        <SearchIcon style={{ color: "gray"}} />
                    </IconButton>
                    <input placeholder="search info" />
                </div>
                <div className="header__rightOptions">
                    <NotificationsIcon className="headerRight__more--icon headerRight__iconNotify" />
                    <div className="headerRight__more">
                        <Avatar src={chiedozie} alt='chiedozie'/>
                        <KeyboardArrowDownIcon className="headerRight__more--icon" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
