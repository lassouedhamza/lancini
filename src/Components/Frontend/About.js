import React, { Component } from 'react';


class Slider extends React.Component{
    render(){
        return(
        <div>
        <section className="about-section-two">
        <div className="about-form-area">
            <div className="container">
                <div className="about-donation-form">
                    <div className="donation-heading">
                        <h3 className="title">Rise Your Hand</h3>
                        <span className="shadow-text">Support</span>
                    </div>
                    <form action="#">
                        <div className="form-wrap">
                            <ul className="donation-amount">
                                <li>$5</li>
                                <li>$50</li>
                                <li>$180</li>
                                <li>$500</li>
                                <li>$1000</li>
                            </ul>
                            <button type="submit" className="main-btn btn-white">Donate Now <i className="far fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
                <div className="about-video wow fadeInDown" data-wow-delay="0.2s">
                    <a href="//www.youtube.com/watch?v=XSGBVzeBUbk" className="video-btn" data-lity><i className="fas fa-play"></i></a>
                </div>
            </div>
        </div>
        <div className="about-text-area">
            <div className="container">
                <div className="row align-items-end justify-content-xl-start">
                    <div className="col-xl-5 col-lg-7 col-md-8 order-xl-2">
                        <div className="about-text">
                            <div className="common-heading mb-30">
                                <span className="tagline">
                                    <i className="fas fa-plus"></i> About us
                                    <span className="heading-shadow-text">About Us</span>
                                </span>
                                <h2 className="title">We Help How To Improve Product Marketing</h2>
                            </div>
                            <p>
                                Sedut perspiciatis unde omnis iste natus voluptatem accusan tium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae.
                            </p>
                            <ul className="check-list mt-30">
                                <li>
                                    <h5 className="title">Highest Success Rates</h5>
                                    <p>Quis autem vel eum iure reprehenderit quin</p>
                                </li>
                                <li>
                                    <h5 className="title">Raise Funds With Crowdfunding</h5>
                                    <p>Voluptate esse quam nihil molestiae consequatur</p>
                                </li>
                                <li>
                                    <h5 className="title">Millions in Funding</h5>
                                    <p>Accusan tium dolore dantiumy totam apeam</p>
                                </li>
                            </ul>
                            <a href="about.html" className="main-btn btn-dark mt-40">Learn More <i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-5 order-xl-1 wow fadeInUp">
                        <div className="about-curved-img">
                            <img src="assets/img/about/man-with-laptop.png" alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-shape">
            <img src="assets/img/about/about-shape.png" alt="Shape"/>
        </div>
    </section>
        </div>
        )
    }
}
export default Slider;