import React, { Component } from 'react';


class Slider extends React.Component{
    render(){
        return(
        <div>
        <section className="hero-area-two">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-11">
                    <div className="hero-text">
                        <h1 className="title wow fadeInLeft" data-wow-delay="0.2s">
                            SYHM 525O VR Box Smart Phone VR Box
                        </h1>
                        <p className="wow fadeInLeft" data-wow-delay="0.3s">
                            Sedut perspiciatis unde omnis iste natus voluptatem accusantium dolore dantiumy totam rem apeam eaque ipsa
                        </p>
                        <ul className="hero-btn">
                            <li className="wow fadeInUp" data-wow-delay="0.4s">
                                <a href="project-2.html" className="main-btn">Explore Projects <i className="far fa-arrow-right"></i></a>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="0.5s">
                                <a href="//www.youtube.com/watch?v=XSGBVzeBUbk" className="video-btn" data-lity><i className="fas fa-play"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto wow fadeInRight" data-wow-delay="0.2s">
                    <div className="hero-img text-lg-right">
                        <img src="assets/img/hero/hero-two-img.png" alt="Img"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-shapes">
            <div className="hero-line-one">
                <img src="assets/img/hero/hero-line-3.png" alt="Line"/>
            </div>
            <div className="hero-line-two">
                <img src="assets/img/hero/hero-line-2.png" alt="Line"/>
            </div>
            <div className="dot-one"></div>
            <div className="dot-two"></div>
        </div>
    </section>
        </div>
        )
    }
}
export default Slider;