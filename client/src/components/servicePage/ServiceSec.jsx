import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ServiceSec = () => {
	const [activeTab, setActiveTab] = useState('pills-work1');
	return (
		<>
			<section className="tc-projects-st17 tc-portfolio-pr">
					<div className="container">
						<div className="title wow fadeIn slow" data-wow-delay="0.2s">
							<div className="row align-items-center">
								<div className="col-lg-12">
									<h2 className="sub-font mb-10"> Our Services </h2>
									<ul className="nav nav-pills mt-50" role="tablist">
										<li className="nav-item">
											<button
												className={`nav-link ${activeTab === 'pills-work1' ? 'active' : ''}`}
												onClick={() => setActiveTab('pills-work1')}
											>
												All
											</button>
										</li>
										<li className="nav-item">
											<button
												className={`nav-link ${activeTab === 'pills-work2' ? 'active' : ''}`}
												onClick={() => setActiveTab('pills-work2')}
											>
												Modern
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-content wow fadeIn slow" data-wow-delay="0.2s">
						<div className={`tab-pane fade ${activeTab === 'pills-work1' ? 'show active' : ''}`}>
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
						<div className={`tab-pane fade ${activeTab === 'pills-work2' ? 'show active' : ''}`}>
							<div className="projects container">
								<div className="row">
									<div className="col-lg-6">
										<Link to="/" className="project-card">
											<div className="img">
												<img src="./assets/img/works/2.jpg" alt="Project" className="img-cover" />
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
												<img src="./assets/img/works/2.jpg" alt="Project" className="img-cover" />
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
					</div>

			</section>

		</>
	);
};

export default ServiceSec;