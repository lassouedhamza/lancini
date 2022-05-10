import React, { Component, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import HeaderDoner from "../Header/HeaderDoner";
import classnames from 'classnames'
import Questions from "../accordion/Questions";
import { useDispatch, useSelector } from "react-redux";
import { FindAllQuestion } from "../../../Redux/actions/QuestionsAction";
import { FindAllCategories } from "../../../Redux/actions/CategoriesAction";
//import i18next from '../i18n';


function DFAQ(props) {

  const [filter, setFilter] = useState([])
  const [pivot, setPivot] = useState(0)
  
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions)
  const categories = useSelector(state => state.categories)

  const onActive = (index, _id)=>{
    setPivot(index)
    setFilter(questions.all.filter(f=>f.category._id === _id))
  }
  

  useEffect(async()=>{
      await dispatch(FindAllCategories())
      await dispatch(FindAllQuestion())
      document.getElementsByClassName('pivot')[0].click(); 
   }, [])

 
  return (
    <div>
      <HeaderDoner/>
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

      <section className="page-title-area">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <h1 className="page-title">FAQ</h1>
            </div>
            <div className="col-auto">
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Page Title End ======-->

            <!--====== FAQ Area Start ======--> */}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div class="col-xl-12">
                <div className="faq-accordion-tab">
                  <div class="faq_search-top_title">
                    <p>Frequently Asked Questions</p>
                    <h3>How Can I Help ?</h3>
                  </div>
                </div>
                <div className="tab-nav-area text-center">
                  <ul className="nav nav-tabs" id="faqTab" role="tablist">
                    
                    {
                        categories && categories.all.map(({_id, name}, index)=>(
                            <li className="nav-item">
                            <a
                                className={classnames('pivot nav-link', {"active": index === pivot})}
                                data-toggle="tab"
                                href={`#${_id}`}
                                role="tab"
                                onClick={()=>onActive(index, _id)}
                            >
                                {name}
                            </a>
                            </li>
                        ))
                    }
                    
                  </ul>
                </div>
                <div className="tab-content" id="faqTabContent">
                  {
                      filter && filter.map(({_id, category, question, response})=>(
                            <Questions _id={_id} category={category} question={question} response={response} show="true"/>
                          
                      ))
                  }
                 
                  <div className="tab-pane fade" id="pricing" role="tabpanel">
                    <div className="accordion" id="accordionFaqThree">
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="true"
                          data-target="#accordion-3-1"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-3-1"
                          className="collapse show"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-3-2"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-3-2"
                          className="collapse"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-3-3"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-3-3"
                          className="collapse"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-3-4"
                        >
                          How To Improve Your Design Process With Data-Based
                          Personas
                        </h5>
                        <div
                          id="accordion-3-4"
                          className="collapse"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-3-5"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-3-5"
                          className="collapse"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-3-6"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-3-6"
                          className="collapse"
                          data-parent="#accordionFaqThree"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="support" role="tabpanel">
                    <div className="accordion" id="accordionFaqFour">
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="true"
                          data-target="#accordion-4-1"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-4-1"
                          className="collapse show"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-2"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-4-2"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-3"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-4-3"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-4"
                        >
                          How To Improve Your Design Process With Data-Based
                          Personas
                        </h5>
                        <div
                          id="accordion-4-4"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-5"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-4-5"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-6"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-4-6"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-7"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-4-7"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-8"
                        >
                          How To Improve Your Design Process With Data-Based
                          Personas
                        </h5>
                        <div
                          id="accordion-4-8"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-9"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-4-9"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-4-10"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-4-10"
                          className="collapse"
                          data-parent="#accordionFaqFour"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="history" role="tabpanel">
                    <div className="accordion" id="accordionFaqFive">
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="true"
                          data-target="#accordion-5-1"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-5-1"
                          className="collapse show"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-2"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-5-2"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-3"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-5-3"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-4"
                        >
                          How To Improve Your Design Process With Data-Based
                          Personas
                        </h5>
                        <div
                          id="accordion-5-4"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-5"
                        >
                          Better Research, Better Design, Better Results
                        </h5>
                        <div
                          id="accordion-5-5"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-6"
                        >
                          Smashing Book Excerpt Bringing Personality Back Web
                        </h5>
                        <div
                          id="accordion-5-6"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-title"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#accordion-5-7"
                        >
                          Using Low Vision As My Tool To Help Me Teach WordPress
                        </h5>
                        <div
                          id="accordion-5-7"
                          className="collapse"
                          data-parent="#accordionFaqFive"
                        >
                          <div className="accordion-content">
                            Sed ut perspiciatis unde omnis iste natus error
                            voluptatem accusantium dolore seyse mque laudantium
                            totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== FAQ Area End ======-->

            <!--====== Feature Section Start ======--> */}
      <section className="feature-section primary-soft-bg section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus"></i> What We Do
              <span className="heading-shadow-text">Features</span>
            </span>
            <h2 className="title">Why choose us</h2>
          </div>

          <div className="row icon-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-debit-card"></i>
                </div>
                <h5 className="title">Fast & Easy Payouts</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <a href="project-1.html" className="link">
                  <i className="far fa-arrow-right"></i>
                </a>
                <span className="box-index">01</span>

                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-payment"></i>
                </div>
                <h5 className="title">Global Payment Processing</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <a href="project-2.html" className="link">
                  <i className="far fa-arrow-right"></i>
                </a>
                <span className="box-index">02</span>

                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-wallet-1"></i>
                </div>
                <h5 className="title">Many Payment Options</h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam
                </p>
                <a href="project-1.html" className="link">
                  <i className="far fa-arrow-right"></i>
                </a>
                <span className="box-index">03</span>

                <div className="box-img">
                  <img src="assets/img/icon-box-bg.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Section End ======-->

            <!--====== Latest News Start ======--> */}
      <section className="latest-blog-section section-gap-extra-bottom">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus"></i> Latest News & Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-two">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 className="title">
                    <a href="news-details.html">
                      Standing Out From Crowds mproving Mobile Experience
                    </a>
                  </h6>
                  <a href="news-details.html" className="post-link">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 className="title">
                    <a href="news-details.html">
                      Five Rules Of App Localization China Money Dating And App
                      Store
                    </a>
                  </h6>
                  <a href="news-details.html" className="post-link">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 className="title">
                    <a href="news-details.html">
                      How To Use Underlined Text Improve User Experience
                    </a>
                  </h6>
                  <a href="news-details.html" className="post-link">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default DFAQ;
