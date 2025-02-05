import React from 'react';

const Team = () => {
	return (
		<>
			<section className="team">
				<div className="container projects portfolio-pr">
					<div className="title ">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<h2 className="sub-font mb-10"> About </h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="title text-center col-lg-7 mx-auto wow fadeIn slow" data-wow-delay="0.2s">
						<h2 className="fsz-50 mt-30"> Best of our Problem Solutions For Our Special Team </h2>
					</div>
					<div className="cards">
						<div className="row">
							<div className="col-lg-3">
								<div className="team-card">
									<div className="img">
										<img src="assets/img/team/t1.jpg" alt="" className="img-cover"/>
									</div>
									<div className="info">
										<div className="social-icons">
											<a href="#" className="link"> <i className="fab fa-facebook-f"></i> </a>
											<a href="#" className="link"> <i className="fab fa-x-twitter"></i> </a>
											<a href="#" className="link"> <i className="fab fa-linkedin-in"></i> </a>
											<a href="#" className="link"> <i className="fab fa-instagram"></i> </a>
										</div>
										<p className="fsz-16 cr-777 mb-2"> Web Developer </p>
										<h6 className="fsz-24 fw-500 text-capitalize"> Thomas tatum </h6>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="team-card">
									<div className="img">
										<img src="assets/img/team/t2.jpg" alt="" className="img-cover"/>
									</div>
									<div className="info">
										<div className="social-icons">
											<a href="#" className="link"> <i className="fab fa-facebook-f"></i> </a>
											<a href="#" className="link"> <i className="fab fa-x-twitter"></i> </a>
											<a href="#" className="link"> <i className="fab fa-linkedin-in"></i> </a>
											<a href="#" className="link"> <i className="fab fa-instagram"></i> </a>

										</div>
										<p className="fsz-16 cr-777 mb-2"> Branding Design </p>
										<h6 className="fsz-24 fw-500 text-capitalize"> Ulises Urijah </h6>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="team-card">
									<div className="img">
										<img src="assets/img/team/t3.jpg" alt="" className="img-cover"/>
									</div>
									<div className="info">
										<div className="social-icons">
											<a href="#" className="link"> <i className="fab fa-facebook-f"></i> </a>
											<a href="#" className="link"> <i className="fab fa-x-twitter"></i> </a>
											<a href="#" className="link"> <i className="fab fa-linkedin-in"></i> </a>
											<a href="#" className="link"> <i className="fab fa-instagram"></i> </a>

										</div>
										<p className="fsz-16 cr-777 mb-2"> Digital Product </p>
										<h6 className="fsz-24 fw-500 text-capitalize"> Landon Legend </h6>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="team-card">
									<div className="img">
										<img src="assets/img/team/t4.jpg" alt="" className="img-cover"/>
									</div>
									<div className="info">
										<div className="social-icons">
											<a href="#" className="link"> <i className="fab fa-facebook-f"></i> </a>
											<a href="#" className="link"> <i className="fab fa-x-twitter"></i> </a>
											<a href="#" className="link"> <i className="fab fa-linkedin-in"></i> </a>
											<a href="#" className="link"> <i className="fab fa-instagram"></i> </a>

										</div>
										<p className="fsz-16 cr-777 mb-2"> UX - UI Designer </p>
										<h6 className="fsz-24 fw-500 text-capitalize"> Ursel Urbane </h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*<a href="../inner_pages/careers.html" className="cir-butn line-butn wow fadeIn slow"*/}
					{/*   data-wow-delay="0.2s">*/}
					{/*	<div className="cont"><span className="txt"> Join Our Team </span> <img*/}
					{/*		src="assets/img/arrow.svg" alt="" className="arrow"/></div>*/}
					{/*</a>*/}
				</div>
			</section>
		</>
	);
};

export default Team;