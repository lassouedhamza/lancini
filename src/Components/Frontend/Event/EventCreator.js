import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import {FacebookShareButton} from "react-share";
import {FacebookIcon} from "react-share";
import {WhatsappIcon} from "react-share"; 
import {WhatsappShareButton} from "react-share";

import ReactPaginate from "react-paginate";
const Events= ({ match }) => {
	const keyword = match.params.keyword
	const pageNumber = match.params.pageNumber || 1
	const dispatch = useDispatch()
const [events, setEvent] = useState([]);
// const [currentPage, setCurrentPage] = useState(1);
// const [eventsPerPage] = useState(2);
const event = useSelector(state => state.event.event);
const fetchEvents = async (currentPage) => {
  const res = await fetch(
  event
  );
  const data = await res.json();
  return data;
};

const handlePageClick = async (data) => {
  console.log(data.selected);

  let currentPage = event.selected + 1;

  const commentsFormServer = await fetchEvents(currentPage);

  setEvent(commentsFormServer);
  // scroll to the top
  //window.scrollTo(0, 0)
};
  console.log(event);
  const shareUrl = 'https://www.youtube.com/watch?v=9WzIACv_mxs';
  return (
    <>
    <HeaderCreator/>
   
    <section className="event-area section-gap-extra-bottom">
    
                    <div className="container">
                    <div className="event-items">
                    <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                           
                    <div className="event-button" >
                                <Link className="nav-link" to={`/stream`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    Navigate to Streaming <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                                <div className="event-button" >
                                <Link className="nav-link" to={`/SendStreamId`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    Send Stream Id <i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                
                                </div>
                    {event.map((event ,id)=>(
                        <div className="event-items" key = {id}>
                            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                            <div className="event-thumb">
                            <img src={`/assets/img/project/${event.eventImage}`} alt="Image"/>
                                </div>
                                
                                <div className="event-content">
                                    <ul className="meta">
                                        <li>
                                            <a href="project-details.html" className="category">{event.category}</a>
                                        </li>
                                       
                                    </ul>
                                    <h4 className="event-title"><a href="#">{event.title}</a></h4>
                                    <p>
                                    {event.description}
                                    </p>
                                </div>
                                
                                <div className="event-button">
                                <Link className="nav-link" to={`/EventsDetails/${event._id}`}>  <a href="project-details.html" className="main-btn bordered-btn">
                                    More Details <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                                <div className="event-button">
                 <FacebookShareButton
          url={shareUrl}
          quote={"heyy join a video streaming noww !!"} hashtag="#React"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
                 <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
                                </div> 
                                
                            </div>
    
                            
                        </div>
                        ))}
                        {/* <Paginate 
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          /> */}
                           <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={4}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
                    </div>
                
                <script src="assets/js/jquery.min.js"></script>
                
                <script src="assets/js/bootstrap.min.js"></script>
                
                <script src="assets/js/jquery.inview.min.js"></script>

                <script src="assets/js/slick.min.js"></script>

                <script src="assets/js/lity.min.js"></script>
                
                <script src="assets/js/wow.min.js"></script>
                
                <script src="assets/js/main.js"></script>
                </section>
                <Footer/>
    </>
  )
}

export default Events