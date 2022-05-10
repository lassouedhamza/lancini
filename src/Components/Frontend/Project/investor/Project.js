import React, { Component ,  useEffect  } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Projecti from "./projecti";
import { useDispatch, useSelector } from 'react-redux';
import { listprojects } from "./../../../../actions/projectActions";
import { Route } from 'react-router-dom';
import SearchBox from "./SearchBox";
import Paginate from './Paginate'
import './../main.css'


const Project= ({ match }) => {
	const keyword = match.params.keyword
	const pageNumber = match.params.pageNumber || 1
	const dispatch = useDispatch()

	const projectList = useSelector((state) => state.projectList)
	const { loading, error, projects, page, pages } = projectList
	useEffect(() => {
		dispatch(listprojects(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber])
        return(
			
        <>
					<Header/>
					
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

				

				{/* <!--====== Page Title Start ======--> */}
				<section className="page-title-area">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-8">
								<h1 className="page-title">Latest Project</h1>
							</div>
							<div className="col-auto">
								<ul className="page-breadcrumb">
									<li><a href="index.html">Home</a></li>
									<li>Project One</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* <!--====== Page Title End ======-->

				<!--====== Project Area Start ======--> */}
				
				<section className="project-section section-gap-extra-bottom primary-soft-bg">
				<Route render={({ history }) => <SearchBox history={history} />} />
					<div className="container">
						<div className="row project-items justify-content-center project-style-one">
							
{projects.map((project) => (
    <div className="col-lg-4 col-md-6 col-sm-10">
	<div className="project-item mb-30">
    <Projecti project={project} > </Projecti>
    </div>
    </div>
))}
<Paginate 
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />						
						
							{/* <div className="col-12">
								<div className="view-more-btn text-center mt-40">
									<a href="project-details.html" className="main-btn bordered-btn">View More Project <i className="far fa-arrow-right"></i></a>
								</div>
							</div> */}
						</div>
					</div>
				</section>
			

			<Footer/>



        </>
		)
	}

export default Project;