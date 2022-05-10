import React, {useState ,  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Rating from "./../Rating";
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import ReactPlayer from "react-player";


import { listprojectDetails ,createprojectReview } from "./../../../../actions/projectActions";
import { PROJECT_CREATE_REVIEW_RESET } from "./../../../../constants/projectConstants";
import jwt_decode from 'jwt-decode';
import axios from "axios";

import { PayPalButton } from "react-paypal-button-v2";
import { Collapse} from 'react-bootstrap'
import {FacebookShareButton,FacebookIcon ,EmailShareButton,WhatsappIcon ,WhatsappShareButton,EmailIcon ,LinkedinShareButton,LinkedinIcon ,FacebookMessengerShareButton,FacebookMessengerIcon} from "react-share";


const ProjectDetails = ({ match }) => {
	
	const dispatch = useDispatch()
	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState('')
	const projectDetails = useSelector((state) => state.projectDetails)
	const { loading, error, project } = projectDetails

	const projectReviewCreate = useSelector((state) => state.projectReviewCreate)
	const {
	  success: successprojectReview,
	  error: errorprojectReview,
	} = projectReviewCreate

	const [Userid, setUserId] = useState("");
	const [username, setUsername] = useState("");
	function  componentWillMount() {
		console.log(jwt_decode(sessionStorage.getItem('authToken')).id)
		let decode=jwt_decode(sessionStorage.getItem('authToken')).id;
		//console.log(localStorage.getItem('authToken'))
		setUserId(decode)
		console.log(Userid)
		
		axios.get('https://codeveloperslancini.herokuapp.com/auth/investorId/'+decode,{mode:'cors'}).then(
		  (response) => {
			let data=response.data
			console.log(response.data)
			setUsername(data.username)
		   })}
	   
		   if(!Userid){
			 componentWillMount()
		   
		   }
	useEffect(() => {
		if (successprojectReview) {
			alert('Review Submitted!')
			setRating(0)
			setComment('')
			dispatch({ type: PROJECT_CREATE_REVIEW_RESET })
		  }
		  dispatch(listprojectDetails(match.params.id))
		}, [dispatch, match, successprojectReview])

		const submitHandler = (e) => {
			e.preventDefault()
			dispatch(
			  createprojectReview(match.params.id, {
				rating,
				comment,
				username,
				Userid,
			  })
			)
		  }
		  const [isCollapseOpen, setCollapse] = React.useState(false)

		  const initCollapse = () => {
			return setCollapse(true)
		  }
return( 
        <>
            
            <Header />
        
    <section className="page-title-area">
		<div className="container">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-8">
					<h1 className="page-title">Project Details</h1>
				</div>
				<div className="col-auto">
					<ul className="page-breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li>Project Details</li>
					</ul>
				</div>
			</div>
		</div>
	</section>


    <section className="project-details-area section-gap-extra-bottom">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 col-md-10">
					<div className="project-thumb mb-md-50">
						<img src={`/assets/img/project/${project.image}`} alt="Image"/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="project-summery">
						<a  className="category">{project.category}</a>
						<h3 className="project-title">
                        {project.name}
						</h3>

						<div className="meta">
							<div className="author">
                            <img src="/assets/img/world-map.png" alt="Thumb" style={{ width : 50 }}/>
								<a > {project.creatorname} </a>
							</div>
							<a  className="date"><i className="far fa-calendar-alt"></i> </a>
							{/* {project.createdAt.substring(0, 10)}  */}
						</div>
						<div className="project-funding-info" >
							<div style={{padding:' 25px  40px',
	'background-color': 'var(--primary-soft-color)'}}>
							<span>
							<Rating
                                   value={project.rating}
                                   text={`${project.numReviews} reviews`}
                                   /> </span>
							</div>
							
						</div>
						<div className="project-raised clearfix">
							<div className="d-flex align-items-center justify-content-between">
								<div className="raised-label">Raised of {project.price}</div>
								<div className="percent-raised">{project.p}%</div>
							</div>
							<div className="stats-bar" data-value={`${project.p}`}>
								<div className="bar-line" style={{width: `${project.p}%`}}></div>
							</div>
						</div>
						<div className="col-lg-6">
							<br/>
							
                 <FacebookShareButton
          url={'https://www.youtube.com/watch?v=voF1plqqZJA&ab_channel=SGXGroup'}
          quote={ project.description} hashtag={'#crowdfunding'}  
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
                 {/* <FacebookMessengerShareButton

          url={'https://www.youtube.com/watch?v=voF1plqqZJA&ab_channel=SGXGroup'}
         
        >
          <FacebookMessengerIcon size={40} round={true} />
        </FacebookMessengerShareButton> */}
		<EmailShareButton
		url={'https://www.youtube.com/watch?v=voF1plqqZJA&ab_channel=SGXGroup'}
		subject="test"
		body="test2"
		hashtag={'#crowdfunding'}
		>
		<EmailIcon size={40} round={true} />
		</EmailShareButton>
		<LinkedinShareButton
		url={'https://www.youtube.com/watch?v=voF1plqqZJA&ab_channel=SGXGroup'}
		title="test"
		summary="test2"
		source="test3"
		>
		<LinkedinIcon size={40} round={true} />
		</LinkedinShareButton>
        </div> 
						<div className="project-form">
							<form action="#">
								<ul className="donation-amount">
									<li>$5</li>
									<li>$50</li>
									<li>$180</li>
									<li>$500</li>
									<li>$1000</li>
								</ul>
								<button onClick={initCollapse} className="main-btn">Invest Now <i className="far fa-arrow-right"></i></button>
							</form>
							<Collapse in={isCollapseOpen}>
							<div id="collapsePanel">
							<PayPalButton className="card card-body"
                      amount={2}
                      //onSuccess={}
                    /> </div>
					</Collapse>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="project-details-tab">
				
						<div className="tab-content" id="projectTabContent">
							<div className="tab-pane fade show active" id="description" role="tabpanel">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										<div className="description-content" >
											<h4 className="description-title">{project.name}</h4>
											<p>
                                            {project.description}
											</p>
											
											<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`/assets/img/project/${project.video}`}
          width='100%'
          height='100%'
		  controls={true}

        />
      </div>
	  

											{/* <h4 className="description-title">Why Donate Our projects</h4>
											<p>
												Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporadunt ut labore et dolore magnam aliquam quaerat voluptate enim ad minima veniam suscipit
											</p>
											<ul className="description-list">
												<li>Standard Lorem Sum Passage Used</li>
												<li>Build A Music Manager With Nuxt</li>
												<li>A Foldable Web Actually Mean</li>
												<li>Upcoming Web Design Conferences</li>
											</ul>
											<p>
												But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,
											</p> */}
											
											<h4 className="description-title">Reviews</h4>
	{project.reviews.length === 0 && <p>No Reviews</p>}
	<ListGroup variant='flush'>
	  {project.reviews.map((review) => (
		<ListGroup.Item key={review._id}>
		  <strong>{review.name}</strong>
		  <Rating value={review.rating} />
		  <p>{review.createdAt.substring(0, 10)}</p>
		  <p>{review.comment}</p>
		</ListGroup.Item>
	  ))}
	  <ListGroup.Item>
		<h2>Write a Customer Review</h2>
		{errorprojectReview && (
		  <p variant='danger'>{errorprojectReview}</p>
		)}
	   
		  <Form onSubmit={submitHandler}>
			<Form.Group controlId='rating'>
			  <Form.Label>Rating</Form.Label>
			  <Form.Control
				as='select'
				value={rating}
				onChange={(e) => setRating(e.target.value)}
			  >
				<option value=''>Select...</option>
				<option value='1'>1 - Poor</option>
				<option value='2'>2 - Fair</option>
				<option value='3'>3 - Good</option>
				<option value='4'>4 - Very Good</option>
				<option value='5'>5 - Excellent</option>
			  </Form.Control>
			</Form.Group>
			<Form.Group controlId='comment'>
			  <Form.Label>Comment</Form.Label>
			  <Form.Control
				as='textarea'
				row='3'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			  ></Form.Control>
			</Form.Group>
			<Button type='submit' variant='primary'>
			  Submit
			</Button>
		  </Form>
		
	  </ListGroup.Item>
	</ListGroup>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-10">
										<div className="rewards-box mt-md-50">
											<h4 className="title">{project.creatorname}</h4>
											<img src={`/assets/img/project/user.png`} style={{width:'70%' }} alt="Image"/>
											{/* <span className="rewards-count"><span>$530</span> or More</span> */}
											<p>
												{project.Position}
											</p>
											{/* <div className="delivery-date">
												<span>25 Mar 20210</span>
												Estimated Delivery
											</div>
											<ul className="rewards-info">
												<li>
													<i className="far fa-user-circle"></i>5 Backers
												</li>
												<li>
													<i className="far fa-trophy-alt"></i>29 Rewards Left
												</li>
											</ul>
											<a href="events.html" className="main-btn">Select Rewards <i className="far fa-arrow-right"></i></a> */}
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="update" role="tabpanel">
								Update
							</div>
							<div className="tab-pane fade" id="bascker-list" role="tabpanel">
								Bascker List
							</div>
							<div className="tab-pane fade" id="reviews" role="tabpanel">
								Reviews
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	
	</section>
	

		
        <Footer />
        


        </>
    )
}
export default ProjectDetails;