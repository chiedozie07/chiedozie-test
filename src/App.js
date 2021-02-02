import React from 'react';
import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';
import LiveUpdate from './components/LiveUpdate';
import Sidebar from './components/Sidebar';
import SidebarBottom from './components/SidebarBottom';
import Feeds from './components/Feeds';


function App() {
    return (
        <div className="app">
            <Header />
            <TopNav />
            <LiveUpdate />
            <div className="app__body">
                <div className="app__body--sidebar">
                    <Sidebar />
                    <SidebarBottom />
                </div>
                <Feeds />
            </div>
        </div>
    );
}

export default App;
