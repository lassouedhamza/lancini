import React, { Component } from 'react';


class Footer extends React.Component{
    render(){
        return(
        <div>
        <footer className="site-footer with-footer-cta with-footer-bg">
        <div className="footer-cta">
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-7 col-md-8 col-sm-10">
                        <span className="cta-tagline">25 Years Of Experience In Crowdfunding</span>
                        <h3 className="cta-title">Raise Hand to Promote Best Products</h3>
                    </div>
                    <div className="col-lg-auto col-md-6">
                        <a href="events.html" className="main-btn bordered-btn bordered-white mt-md-30">
                            Promote Your Products <i className="far fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content-area">
            <div className="container">
                <div className="footer-widgets">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="widget about-widget">
                                <div className="footer-logo">
                                    <img src="assets/img/logo.png" alt="Lancini"/>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omn iste natus error sit voluptatem
                                </p>
                                <div className="newsletter-form">
                                    <h5 className="form-title">Join Newsletters</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button type="submit"><i className="far fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 col-sm-6">
                            <div className="widget nav-widget">
                                <h4 className="widget-title">Our Projects</h4>
                                <ul>
                                    <li><a href="project-1.html">Medical & Health</a></li>
                                    <li><a href="project-2.html">Educations</a></li>
                                    <li><a href="project-1.html">Technology</a></li>
                                    <li><a href="project-3.html">Web Development</a></li>
                                    <li><a href="project-2.html">Food & Clothes</a></li>
                                    <li><a href="project-1.html">Video & Movies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="widget nav-widget">
                                <h4 className="widget-title">Support</h4>
                                <ul>
                                    <li><a href="about.html">Privacy Policy</a></li>
                                    <li><a href="contact.html">Conditions</a></li>
                                    <li><a href="company-overview.html">Company</a></li>
                                    <li><a href="faq.html">Faq & Terms</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-auto col-md-5 col-sm-8">
                            <div className="widget contact-widget">
                                <h4 className="widget-title">Contact Us</h4>
                                <ul className="info-list">
                                    <li>
                                        <span className="icon"><i className="far fa-phone"></i></span>
                                        <span className="info">
                                            <span className="info-title">Phone Number</span>
                                            <a href="#">+012(345) 78 93</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="far fa-envelope-open"></i></span>
                                        <span className="info">
                                            <span className="info-title">Email Address</span>
                                            <a href="#">support@gmail.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="far fa-map-marker-alt"></i></span>
                                        <span className="info">
                                            <span className="info-title">Locations</span>
                                            <a href="#">59 Main Street, USA</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="row flex-md-row-reverse">
                        <div className="col-md-6">
                            <ul className="social-icons">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <p className="copyright-text">© 2021 <a href="#">Lancini</a>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
        )}
}
export default Footer; 