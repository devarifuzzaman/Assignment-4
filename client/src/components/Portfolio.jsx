import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState('pills-work1');

	return (
		<section className="tc-portfolio-pr">
			<div className="container">
				<div className="title wow fadeIn slow" data-wow-delay="0.2s">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<h2 className="sub-font mb-5 mb-lg-0"> work </h2>
						</div>
						<div className="col-lg-5">
							<h3 className="fsz-50 sub-font mb-10"> Our Portfolio </h3>
							<ul className="nav nav-pills" role="tablist">
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
				<Link to="/service" className="cir-butn icon-200">
					<div className="cont">
						<span className="txt fsz-16"> View All Works </span>
						<img src="assets/img/arrow_wh.svg" alt="" className="arrow" />
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Portfolio;