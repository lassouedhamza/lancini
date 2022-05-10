import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useState } from "react";


class HeaderDoner extends React.Component{
   
  
    render(){
        return(
          
                <div>
                   {/* <!--====== Header Start ======--> */}
                   <header className="site-header sticky-header">
                   <div className="header-topbar d-none d-sm-block">
                       <div className="container">
                           <div className="row justify-content-between align-items-center">
                               <div className="col-auto">
                                   <ul className="contact-info">
                                       <li><a href="#"><i className="far fa-envelope"></i> support@gmail.com</a></li>
                                       <li><a href="#"><i className="far fa-map-marker-alt"></i> 250 Main Street, 2nd Floor, USA</a></li>
                                   </ul>
                               </div>
                               <div className="col-auto d-none d-md-block">
                                   <ul className="social-icons">
                                       <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                       <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                       <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                       <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="navbar-wrapper">
                       <div className="container">
                           <div className="navbar-inner">
                               <div className="site-logo">
                                   <a href="index.html"><img src="assets/img/logo.png" alt="Funden" width={130}/></a>
                               </div>
                               <div className="nav-menu">
                                   <ul>
                                   
                                
                                       <li>
                                       <Link to="/HomeDoner">Home</Link> 
                                           
                                       </li>
                                       <li>
                                       <Link to="/myProfileDoner">Profile</Link> 
                                          
                                       </li>
                                       
                                     
                                      
                                     
                                        <li >
                                        <Link to="/dproject">Projects</Link>
                                        
                                    </li>
        
                                           
                                       
                                       <ul className="submenu">
                                       <li> <Link to="/bankings">Banks</Link> </li>
                                               <li><a href="company-overview.html">Company Overview</a></li>
                                              
                                           </ul>
                                      
                                           <li><Link to="/DFAQ">FAQ</Link></li>
                                           <li >
                                           <Link to="/DContactUs">Contact</Link>
                                            
                                           </li>
                                   </ul>
        
                               </div>
                               <div className="navbar-extra d-flex align-items-center">
                               <Link to='/loginDoner' className="main-btn nav-btn d-none d-sm-inline-block" >LOGOUT</Link>
                                   
                               </div>
                           </div>
                       </div>
                   </div>
                 
               </header>
               
                </div>
                )
    }
}
export default HeaderDoner;