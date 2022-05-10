import React, { useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const EventsDetails = (props) => {
    const eventId = window.location.pathname.split("/IEventsDetails/")[1];
    console.log(
        "window.location.pathname id : " +
        window.location.pathname.split("/IEventsDetails/")[1]
    );
    console.log("props.match.params.value: " + props.match.params.value);

    const event = useSelector(
        state =>
            state.event.event[
            state.event.event.findIndex(event => event._id === eventId + "")
            ]
    );

    console.log("prod" + JSON.stringify(event));
    console.log("props.location.event._id" + JSON.stringify(props.location.event?._id));






    return (

        <>
            <Header/>
            <section className="project-details-area section-gap-extra-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-center">


                        <div className="col-12">
                            <div className="project-details-tab">

                                <div className="tab-content" id="projectTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="content">

                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="project-summery">
                                                        <a href="#" class="category">{event.category}</a>
                                                        <div className="thumb"></div>
                                                        <div className="description-content">
                                                            <h4 className="description-title">{event.title}</h4>
                                                            <p>
                                                                {event.description}
                                                            </p>

                                                            <img className="mt-50 mb-50" src={`/assets/img/project/${event.eventImage}`} alt="Image" />

                                                            <h4 className="description-title">Program</h4>
                                                            <p>
                                                                {event.program}
                                                            </p>


                                                        </div>
                                                    </div></div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-10">
                                                <div className="rewards-box mt-md-50">
                                                    <a className="main-btn">Join Event <i className="far fa-arrow-right">           <Link to={`/stream`}>
                                                        Send Stream Id </Link></i></a>
                                                    <div className="delivery-date">
                                                        <span>Fee Participation</span>

                                                        {event.fee_participation}

                                                        Dt
                                                    </div>








                                                    <ul className="rewards-info">
                                                        <li>

                                                            <span className="date"> <i className="far fa-calendar-alt"></i> {event.date}</span>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-user-circle"></i>
                                                            {event.participant_number} Participant
                                                        </li>
                                                        <li>
                                                            <i className="far fa-handshake"></i>
                                                            
Sponsored by : {event.sponsors} 
                                                        </li>
                                                    </ul>

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




            <script src="assets/js/bootstrap.min.js"></script>

            <script src="assets/js/jquery.inview.min.js"></script>

            <script src="assets/js/slick.min.js"></script>

            <script src="assets/js/lity.min.js"></script>

            <script src="assets/js/wow.min.js"></script>

            <script src="assets/js/main.js"></script>

            <Footer />

        </>

    )
}

export default EventsDetails