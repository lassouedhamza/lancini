import React ,{useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import axios from "axios";

const BanksOffers = () => {
  
 const [data,setData]=useState([]);
 useEffect(()=>{
     getBnaksOffers();
 },[])
 const getBnaksOffers = async ()=> {
     const response=await axios.get("https://codeveloperslancini.herokuapp.com/banksoffers");
     if (response.status === 200){
         setData(response.data);
     }
 };
  return (
    <>
    <HeaderCreator></HeaderCreator>
    <section className="event-area section-gap-extra-bottom">
                    <div className="container">
                    {data && data.map((item,index)=>(
                        <div className="event-items" key={index}>
                            <div className="single-event-item mb-30 wow fadeInUp" data-wow-delay="0s">
                                {/* <div className="event-thumb">
                                    <img src={`/BanksOffers/${item.link}`} alt="Image"/>
                                </div> */}


                                
                                <div className="event-content">
                                    <ul className="meta">
                                        <li>
                                            <a href="project-details.html" className="category">Credits</a>
                                        </li>
                                       
                                    </ul>
                                    <h4 className="event-title"><a href={item.url}>{item.Credit_Name}</a></h4>
                                    <p>
                                    {item.Description}
                                    </p>
                                    
                                </div>
                                
                                <div className="event-button">
                                {/* <Link className="nav-link" to={`/PartnersDetails/${bankingpartners._id}`}>  <a href="project-details.html" className="main-btn bordered-btn">More Details <i className="far fa-arrow-right"></i></a></Link> */}
                          
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

export default BanksOffers