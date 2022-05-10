import React from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";

const Partners =  (props) => {

const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);

  console.log(bankingpartners);
  return (
    <>
    <HeaderCreator></HeaderCreator>
    <section className="event-area section-gap-extra-bottom">
                    <div className="container">
                    {bankingpartners.map((bankingpartners ,id)=>(
                        <div className="event-items" key = {id}>
                            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                                <div className="event-thumb">
                                    <img src={`/uploads/${bankingpartners.bankImage}`} alt="Image"/>
                                </div>
                                
                                <div className="event-content">
                                    <ul className="meta">
                                        <li>
                                            <a href="project-details.html" className="category">Partner</a>
                                        </li>
                                       
                                    </ul>
                                    <h4 className="event-title"><a href="#">{bankingpartners.bank_name}</a></h4>
                                    <p>
                                    {bankingpartners.description}
                                    </p>
                                </div>
                                
                                <div className="event-button">
                                <Link className="nav-link" to={`/PartnersDetails/${bankingpartners._id}`}>  <a href="project-details.html" className="main-btn bordered-btn">More Details <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
                                
                            </div>
    
                            
                        </div>
                        ))}
                    </div>
                
                <script src="assets/js/jquery.min.js"></script>
                
                <script src="assets/js/bootstrap.min.js"></script>
                
                <script src="assets/js/jquery.inview.min.js"></script>

                <script src="assets/js/slick.min.js"></script>

                <script src="assets/js/lity.min.js"></script>
                
                <script src="assets/js/wow.min.js"></script>
                
                <script src="assets/js/main.js"></script>
                </section>
                <Footer></Footer>
    </>
  )
}

export default Partners