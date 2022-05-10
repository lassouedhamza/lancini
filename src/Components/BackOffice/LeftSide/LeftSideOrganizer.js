import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LeftSideOrganizer extends React.Component{
    render(){
        return(
        <>
        <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html"> <img alt="image" src="assets/img/logo.png" className="header-logo" /> <span
                className="logo-name"></span>
            </a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="dropdown active">
              <a href="index.html" className="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
            </li>
            <li className="dropdown">
            
             
             
              <ul className="dropdown">
              <Link to='/EventCalendar' className="menu-toggle nav-link has-dropdown">Events</Link>
              </ul>
              
            </li>
           

           
           
           
            
            
          </ul>
        </aside>
           
      </div>
        </>
        )
    }
}
export default LeftSideOrganizer;