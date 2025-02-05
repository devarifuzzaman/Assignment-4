import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ServiceSec = () => {

	return (
		<>
			<section className="projects portfolio-pr">
					<div className="container">
						<div className="title ">
							<div className="row align-items-center">
								<div className="col-lg-12">
									<h2 className="sub-font mb-10"> Our Services </h2>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-content mt-5">
							<div className="projects container">
								<div className="row">
									<div className="col-lg-6">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/1.jpg" alt="Project" className="img-cover" />
											</div>
											<div className="info">
												<h6 className="fsz-24 mb-15"> Sample Project 1 </h6>
												<p> Branding </p>
											</div>
										</Link>
									</div>
									<div className="col-lg-6">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/1.jpg" alt="Project" className="img-cover" />
											</div>
											<div className="info">
												<h6 className="fsz-24 mb-15"> Sample Project 1 </h6>
												<p> Branding </p>
											</div>
										</Link>
									</div>
									<div className="col-lg-4">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/1.jpg" alt="Project" className="img-cover" />
											</div>
											<div className="info">
												<h6 className="fsz-24 mb-15"> Sample Project 1 </h6>
												<p> Branding </p>
											</div>
										</Link>
									</div>
									<div className="col-lg-4">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/1.jpg" alt="Project" className="img-cover" />
											</div>
											<div className="info">
												<h6 className="fsz-24 mb-15"> Sample Project 1 </h6>
												<p> Branding </p>
											</div>
										</Link>
									</div>
									<div className="col-lg-4">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/1.jpg" alt="Project" className="img-cover" />
											</div>
											<div className="info">
												<h6 className="fsz-24 mb-15"> Sample Project 1 </h6>
												<p> Branding </p>
											</div>
										</Link>
									</div>

								</div>
							</div>
						</div>


			</section>

		</>
	);
};

export default ServiceSec;