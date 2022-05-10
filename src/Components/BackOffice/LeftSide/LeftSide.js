import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LeftSide extends React.Component{
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
            <Link to='/investors' className="menu-toggle nav-link has-dropdown">Investors</Link>
             
              <ul className="dropdown">
              <Link to='/creators' className="menu-toggle nav-link has-dropdown">Creators</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/doners' className="menu-toggle nav-link has-dropdown">Doners</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/categoryQt' className="menu-toggle nav-link has-dropdown">Categorie Question</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/Questions' className="menu-toggle nav-link has-dropdown">FAQ</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/ProjectListScreen' className="menu-toggle nav-link has-dropdown">Project</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/events' className="menu-toggle nav-link has-dropdown">Events</Link>
              </ul>
              <ul className="dropdown">
              <Link to='/bankslist' className="menu-toggle nav-link has-dropdown">Banking Partners</Link>
              </ul>
            </li>
           

           
           
           
            
            
          </ul>
        </aside>
           
      </div>
        </>
        )
    }
}
export default LeftSide;