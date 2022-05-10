import React , { useState, useEffect }from 'react'
import Footer from '../Footer/Footer'
import HeaderCreator from '../Header/HeaderCreator'
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
const PartnersDetails = (props) => {
  const partnerId = window.location.pathname.split("/PartnersDetails/")[1];
  console.log(
    "window.location.pathname id : " +
      window.location.pathname.split("/PartnersDetails/")[1]
  );
  console.log("props.match.params.value: " + props.match.params.value);

  const partner = useSelector(
    state =>
      state.bankingpartners.bankingpartners[
        state.bankingpartners.bankingpartners.findIndex(partner => partner._id === partnerId+"")
      ]
  );

  console.log("prod" + JSON.stringify(partner));
  console.log("props.location.partner._id" + JSON.stringify(props.location.partner?._id));



  const bankingpartners = useSelector(state => state.bankingpartners.bankingpartners);
  const [bankingpartner, setBankingPartner] = useState(JSON.parse(localStorage.getItem("selectBankingPartner")));
  useEffect(() => {
  

    console.log(bankingpartner);
  
  }, [partner]);


  
  return (
    
    <>
   <HeaderCreator></HeaderCreator>
    <section className="project-details-area section-gap-extra-bottom">
		<div className="container">
       
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 col-md-10">
					<div className="project-thumb mb-md-50">
						<img src={`/uploads/${partner.bankImage}`} alt="Image"/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="project-summery">
						<a href="#" className="category">Partner</a>
						<h3 className="project-title">
                        {partner.bank_name}
						</h3>

						<p>
                        {partner.description}
                        </p>
                        
                        
                        <h2 className="project-title">
                        Special offer</h2>
                        <div>
                        {partner.offer}
                        </div>

                        <div>
                        <h2>Please contact us here</h2>
                        {partner.email}
                        </div>
                       
                        

						
						
						
					</div>
          {/* <div class="project-form">
                    <button type="submit" class="main-btn">Request <i class="far fa-arrow-right" ></i></button>
                    </div> */}
                    <div className="event-button">
                                <Link className="nav-link" to={`/Request`}>  <a href="project-details.html" className="main-btn bordered-btn">Request <i className="far fa-arrow-right"></i></a></Link>
                          
                                </div>
				</div>
			
			</div>
          
		</div>
	</section>
    <Footer></Footer>
    
    </>
  
  )
}

export default PartnersDetails