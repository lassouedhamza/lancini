import React, { Component ,  useEffect  } from "react";
import { useDispatch, useSelector } from 'react-redux'
import HeaderVisitor from "../Header/HeaderVisitor";
import Footer from "../Footer/Footer";
import Projecti from "../Project/projecti";
import { listprojects } from "./../../../actions/projectActions";
import PostData from "../data/investors.json"
import { Link } from 'react-router-dom';

const HomeVisitor= () => {
    const dispatch = useDispatch()

    const projectList = useSelector((state) => state.projectList)
    const { loading, error, projects } = projectList
  
     useEffect(() => {
    dispatch(listprojects())
  }, [dispatch])
  
         return(
             
           <div>
           <HeaderVisitor/>     
           <div id="preloader">
           <div id="loading-center">
               <div id="loading-center-absolute">
                   <div className="object" id="object_one"></div>
                   <div className="object" id="object_two"></div>
                   <div className="object" id="object_three"></div>
                   <div className="object" id="object_four"></div>
               </div>
           </div>
       </div>
   
     
       <section className="hero-area-one">
           <div className="hero-text">
               <div className="container">
                   <div className="row justify-content-center">
                   <div className="col-xl-10">
                           <span className="tagline wow fadeInUp" data-wow-delay="0.3s">Crowdfounding Agency</span>
                           <h1 className="title wow fadeInUp" data-wow-delay="0.4s">Raise Hand to Promote Best projects</h1>
                           <a  className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                           <Link to="/loginCreator">Lancini Now</Link>   <i className="far fa-arrow-right"></i>
                           </a>
                           <a  className="main-btn wow fadeInUp" data-wow-delay="0.5s">
                           <Link to="/loginInvestor">Invest Now</Link>  <i className="far fa-arrow-right"></i>
                           </a>
                           
                       </div>
                   </div>
               </div>
               <div className="hero-shapes">
                   <div className="hero-line-one">
                       <img src="assets/img/hero/hero-line.png" alt="Line"/>
                   </div>
                   <div className="hero-line-two">
                       <img src="assets/img/hero/hero-line-2.png" alt="Line"/>
                   </div>
                   <div className="dot-one"></div>
                   <div className="dot-two"></div>
               </div>
           </div>
           <div className="hero-images">
               <div className="hero-img image-small fancy-bottom wow fadeInLeft" data-wow-delay="0.6s">
                   <img src="assets/img/hero/hero-one-small.jpg" alt="Image"/>
               </div>
               <div className="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
                   <img src="assets/img/hero/hero-one-big.jpg" alt="Image"/>
               </div>
               <div className="hero-img image-small fancy-top wow fadeInRight" data-wow-delay="0.7s">
                   <img src="assets/img/hero/hero-one-small-2.jpg" alt="Image"/>
               </div>
           </div>
       </section>
       {/* <!--====== Hero Area End ======-->
   
       <!--====== Categories Section Start ======--> */}
       <section className="popular-categories section-gap">
           <div className="container">
               <div className="categories-header">
                   <div className="row align-items-center justify-content-between">
                       <div className="col-auto">
                           <div className="common-heading mb-30">
                               <span className="tagline">
                                   <i className="fas fa-plus"></i> what we do
                                   <span className="heading-shadow-text">Category</span>
                               </span>
                               <h2 className="title">Popular Categories</h2>
                           </div>
                       </div>
                       <div className="col-auto">
                           <a href="project-1.html" className="main-btn mb-30">View All Category <i className="far fa-angle-right"></i></a>
                       </div>
                   </div>
               </div>
               <div className="row justify-content-center fancy-icon-boxes">
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-reading-book"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Education</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.1s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-stethoscope"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Medical & Health</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.2s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-tshirt-1"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Clothes</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.3s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-video-camera"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Video & Films</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.4s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-project-management"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Technology</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.5s">
                       <div className="fancy-box-item mt-30">
                           <div className="icon">
                               <i className="flaticon-salad"></i>
                           </div>
                           <div className="content">
                               <h4 className="title"><a href="project-details.html">Organic Foods</a></h4>
                               <p>School, Collage & University</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== Categories Section End ======-->
   
       <!--====== About Section Start ======--> */}
       <section className="about-section-one">
           <div className="container">
               <div className="row align-items-center justify-content-lg-start justify-content-center">
                   <div className="col-xl-6 col-lg-7 col-md-9">
                       <div className="about-img">
                           <img src="assets/img/about/about-one.jpg" alt="Image"/>
                       </div>
                   </div>
                   <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
                       <div className="about-text mt-md-70 mb-md-50">
                           <div className="common-heading mb-30">
                               <span className="tagline">
                                   <i className="fas fa-plus"></i> who we are
                                   <span className="heading-shadow-text">Abouit Us</span>
                               </span>
                               <h2 className="title">Why Choose Us</h2>
                           </div>
                           <p>
                               Sedut perspiciatis unde omnis iste natus voluptatem accusantium dolore dantiumy totam rem apeam, eaque ipsa quaventore veritatis quasi architecto beatae.
                           </p>
                           <div className="author-note wow fadeInUp">
                               <ul>
                                   <li><i className="far fa-check"></i> Non-Profite Crowdfunding Agency</li>
                                   <li><i className="far fa-check"></i> We're Successful Institute </li>
                               </ul>
                               <div className="author-info">
                                   <div className="author-img">
                                       <img src="assets/img/author-thumbs/01.jpg" alt="Image"/>
                                   </div>
                                   <h5 className="name">Michel H. Heart</h5>
                                   <span className="title">CEO & Founder</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== About Section End ======-->
   
       <!--====== Project Section Start ======--> */}
       <section className="project-section project-section-extra-gap secondary-bg">
           <div className="container-fluid fluid-extra-padding">
               <div className="common-heading text-center color-version-white mb-60">
                   <span className="tagline">
                       <i className="fas fa-plus"></i> Popular Projects
                       <span className="heading-shadow-text">Our Projects</span>
                   </span>
                   <h2 className="title">Explore Our Projects</h2>
               </div>
               <div className="row project-slider-one project-items project-style-one no-shadow">
                 
               
                    {projects.map((project) => (
                        <div className="col" >  
                            <div className="project-item ">
                                <Projecti project={project} > </Projecti>
                            </div>
                        </div>
                    ))}
                    </div>
           
              
           </div>
       </section>
       {/* <!--====== Project Section End ======-->
   
       <!--====== Counter Area Start ======--> */}
       <section className="counter-section-one mt-negative">
           <div className="container primary-bg">
               <div className="row counter-boxes justify-content-xl-between justify-content-center">
                   <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                       <div className="counter-box mb-40 icon-left">
                           <div className="icon white-color">
                               <i className="flaticon-crowdfunding"></i>
                           </div>
                           <div className="content white-color">
                               <div className="count-wrap">
                                   <span className="count">3598</span>
                                   <span className="suffix">+</span>
                               </div>
                               <h6 className="title">We’ve Project Complate</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                       <div className="counter-box mb-40 icon-left">
                           <div className="icon white-color">
                               <i className="flaticon-crowdfunding"></i>
                           </div>
                           <div className="content white-color">
                               <div className="count-wrap">
                                   <span className="count">9634</span>
                                   <span className="suffix">+</span>
                               </div>
                               <h6 className="title">Global Partners</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                       <div className="counter-box mb-40 icon-left">
                           <div className="icon white-color">
                               <i className="flaticon-crowdfunding"></i>
                           </div>
                           <div className="content white-color">
                               <div className="count-wrap">
                                   <span className="count">8565</span>
                                   <span className="suffix">+</span>
                               </div>
                               <h6 className="title">Awards Winning</h6>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
                       <div className="counter-box mb-40 icon-left">
                           <div className="icon white-color">
                               <i className="flaticon-crowdfunding"></i>
                           </div>
                           <div className="content white-color">
                               <div className="count-wrap">
                                   <span className="count">4756</span>
                                   <span className="suffix">+</span>
                               </div>
                               <h6 className="title">Active Volunteer</h6>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== Counter Area End ======-->
   
       <!--====== Testimonials Start ======--> */}
       <section className="testimonials-section section-gap">
           <div className="container">
               <div className="row align-items-center justify-content-center">
                   <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                       <div className="testimonials-content mb-lg-50">
                           <div className="common-heading mb-30">
                               <span className="tagline">
                                   <i className="fas fa-plus"></i> clients Feedback
                                   <span className="heading-shadow-text">Testimonials</span>
                               </span>
                               <h2 className="title">Why Choose Us</h2>
                           </div>
                           <p>
                               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan totam rem aperiam eaque ipsa quae abillo inventore verit quasi architecto beatae vitae dicta sunt
                           </p>
                           <a href="testimonial.html" className="main-btn mt-35">View All Reviews <i className="far fa-arrow-right"></i></a>
   
                           <div className="testimonial-author-boxes wow fadeInUp" data-wow-delay="0.2s">
                               <h6>Most Popular Clients</h6>
                               <ul className="author-images">
                                   <li data-tooltip="true" data-placement="top" data-original-title="Donald L. Juarez">
                                       <a href="#"><img src="assets/img/author-thumbs/01.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="Evan A. Ethridge">
                                       <a href="#"><img src="assets/img/author-thumbs/02.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="Donald L. Lewis">
                                       <a href="#"><img src="assets/img/author-thumbs/03.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="Marcus L. Duncan">
                                       <a href="#"><img src="assets/img/author-thumbs/04.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="Evan A. Ethridge">
                                       <a href="#"><img src="assets/img/author-thumbs/05.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="M. Jon Doe">
                                       <a href="#"><img src="assets/img/author-thumbs/06.jpg" alt="user one"/></a>
                                   </li>
                                   <li data-tooltip="true" data-placement="top" data-original-title="More">
                                       <a href="#" className="more-icon"><i className="far fa-plus"></i></a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
                   <div className="col-xl-8 col-lg-10">
                       <div className="testimonial-boxes square-shape">
                           <div className="row  justify-content-center">
                               <div className="col-lg-6 col-md-6 col-sm-10">
                                   <div className="testimonial-box-one wow fadeInUp" data-wow-delay="0s">
                                       <div className="author-info">
                                           <div className="author-img">
                                               <img src="assets/img/author-thumbs/01.jpg" alt="Thumb"/>
                                           </div>
                                           <div>
                                               <h5 className="name">Howard A. Guest</h5>
                                               <p className="position">Web Developer</p>
                                           </div>
                                       </div>
                                       <p className="testimonial-desc">
                                           Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem
                                       </p>
                                       <div className="rating-wrap">
                                           <span>Rating</span>
                                           <ul>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div className="testimonial-box-one mt-30 wow fadeInUp" data-wow-delay="0.1s">
                                       <div className="author-info">
                                           <div className="author-img">
                                               <img src="assets/img/author-thumbs/03.jpg" alt="Thumb"/>
                                           </div>
                                           <div>
                                               <h5 className="name">Howard A. Guest</h5>
                                               <p className="position">Web Developer</p>
                                           </div>
                                       </div>
                                       <p className="testimonial-desc">
                                           Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem
                                       </p>
                                       <div className="rating-wrap">
                                           <span>Rating</span>
                                           <ul>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-lg-6 col-md-6 col-sm-10">
                                   <div className="testimonial-box-one mt-30 wow fadeInUp" data-wow-delay="0.2s">
                                       <div className="author-info">
                                           <div className="author-img">
                                               <img src="assets/img/author-thumbs/02.jpg" alt="Thumb"/>
                                           </div>
                                           <div>
                                               <h5 className="name">Howard A. Guest</h5>
                                               <p className="position">Web Developer</p>
                                           </div>
                                       </div>
                                       <p className="testimonial-desc">
                                           Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem
                                       </p>
                                       <div className="rating-wrap">
                                           <span>Rating</span>
                                           <ul>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div className="testimonial-box-one mt-30 wow fadeInUp" data-wow-delay="0.3s">
                                       <div className="author-info">
                                           <div className="author-img">
                                               <img src="assets/img/author-thumbs/04.jpg" alt="Thumb"/>
                                           </div>
                                           <div>
                                               <h5 className="name">Howard A. Guest</h5>
                                               <p className="position">Web Developer</p>
                                           </div>
                                       </div>
                                       <p className="testimonial-desc">
                                           Quis autem vel eum reprehenderit quiea voluptate velit essenih lestiae conseqatur veillum dolorem
                                       </p>
                                       <div className="rating-wrap">
                                           <span>Rating</span>
                                           <ul>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                               <li><i className="fas fa-star"></i></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== Testimonials End ======-->
   
       <!--====== Emergency Project & CTA Start ======--> */}
       <section className="emergency-project-with-cta">
           <div className="container">
               {/* <!-- Call to Action --> */}
               <div className="cta-box cta-double-content" style={{backgroundImage: `url(assets/img/cta/01.jpg)`}}>
                   <div className="row justify-content-center">
                       <div className="col-xl-4 col-lg-5 col-md-9">
                           <div className="content">
                               <h2 className="cta-title">Get Funding And Support</h2>
                               <p>Sed perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudan
                                   totamrem aperiam eaque quae abille</p>
                               <a href="events.html" className="main-btn">Start a Funden <i className="far fa-arrow-right"></i></a>
                           </div>
                       </div>
                       <div className="col-xl-2 col-lg-1 cta-double-content-gap"></div>
                       <div className="col-xl-4 col-lg-5 col-md-9">
                           <div className="content">
                               <h2 className="cta-title">Access Data And Insights</h2>
                               <p>Sed perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudan
                                   totamrem aperiam eaque quae abille</p>
                               <a href="events.html" className="main-btn">Start a Funden <i className="far fa-arrow-right"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
          
           <div className="emergency-project-slider">
               <div className="container">
                   <div className="common-heading text-center mb-60">
                       <span className="tagline">
                           <i className="fas fa-plus"></i> Donate Projects
                           <span className="heading-shadow-text">Donate</span>
                       </span>
                       <h2 className="title">Investors</h2>
                   </div>
                  
                   <div className="row project-slider-two project-items project-style-four">
                   {PostData.map((postDetail,index)=>{return <div>
                       <div className="col">
                           <div className="project-item">
                             
                              
                           <div className="content">
                           <div className="cats">
                               <a href="#">{postDetail.round}</a>
                           </div>

                           <div className="author">
                               
                               <a href="#">{postDetail.name}</a>
                           </div>

                           <h5 className="title">
                               <a href="project-details.html">{postDetail.curr}</a>
                           </h5>
                           <div className="project-stats">
                               <div className="stats-value">
                                   <span className="value-title">Raised of <span className="value">{postDetail.min_range}</span></span>
                                   <span className="stats-percentage">{postDetail.max_range}</span>
                               </div>
                               <div className="stats-bar" data-value="90">
                                   <div className="bar-line"></div>
                               </div>
                           </div>
                           <span className="date">{postDetail.cat}</span>
                       </div>
                               </div>
                           </div>
                       </div>})}
                     

                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== Emergency Project & CTA End ======-->
   
       <!--====== Partners Section Start ======--> */}
       <section className="partners-section section-gap section-border-bottom">
           <div className="container">
               <div className="common-heading mb-30">
                   <span className="tagline">
                       <i className="fas fa-plus"></i> Our Partners
                       <span className="heading-shadow-text">Partners</span>
                   </span>
                   <h2 className="title">Trusted Partners</h2>
               </div>
               <div className="row partners-logos-one">
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/01.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/02.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/03.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/04.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/05.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/06.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/07.png" alt="Image"/></a>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-6">
                       <div className="logo mt-30">
                           <a href="#"><img src="assets/img/partners/08.png" alt="Image"/></a>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       {/* <!--====== Partners Section End ======-->
   
       <!--====== Latest News Start ======--> */}
   
      <Footer/>
   
           
           
           </div>
         )
     }
 
 export default HomeVisitor;