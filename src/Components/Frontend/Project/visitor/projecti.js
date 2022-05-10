import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Rating from "./../Rating";



const Projecti = ({ project }) => {
  return (
      
    // <Card className='my-3 p-3 rounded'>
    //   <a href={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant='top' />
    //   </a>

    //   <Card.Body>
    //     <a href={`/product/${product._id}`}>
    //       <Card.Title as='div'>
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </a>

    //     <Card.Text as='div'>
    //       <div className='my-3'>
    //         {product.rating} from {product.numReviews} reviews
    //       </div>
    //     </Card.Text>

    //     <Card.Text as='h3'>${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
<>
<Link to={`/VProjectDetails/${project._id}`}>
    
                           <div className="thumb"style={{backgroundImage: `url('/assets/img/project/${project.image}')`}}></div>
                           <div className="content">
                               <div className="cats">
                                   <a >{project.category}</a>
                               </div>
                               <div class="author">
								<img src={`/assets/img/project/user.png`} alt="Thumb"/>
								<a href="#">{project.creatorname}</a>
							</div>
                               <div className="author">
                                   
                                   <Rating
                                   value={project.rating} 
                                   text={`${project.numReviews} reviews`}
                                   />

                               </div>
                             
                               <h5 className="title">
                                   <a>{project.name}</a>
                               </h5>
                               <div className="project-stats">
                                   <div className="stats-value">
                                       <span className="value-title">Raised of <span className="value">{project.price}</span></span>
                                       <span className="stats-percentage">{project.p}%</span>
                                   </div>
                                   <div className="stats-bar" data-value={ `${project.p}` }>
                                    <div className="bar-line" style={{width: `${project.p}%`}} ></div>
                                   </div>
                               </div>
                               <span className="date"><i className="far fa-calendar-alt"></i> {project.createdAt.substring(0, 10)}</span>
                           </div>

                           </Link>
                           </>
                   
    

  )
}

export default Projecti