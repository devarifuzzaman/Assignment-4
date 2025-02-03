import React from 'react';
import {Link} from "react-router-dom";

const AboutSection = () => {
	return (
		<>
			<section className="tc-about-pr wow fadeIn slow" data-wow-delay="0.2s">
				<div className="container">
					<div className="title">
						<div className="row justify-content-between align-items-center">
							<div className="col-lg-7">
								<h6 className="fsz-16 fw-200 mb-40"><img src="./assets/img/icons/tit_ico.svg" alt="" className="icon"/> <span className="txt mx-2"> About My History </span>
									<img src="./assets/img/icons/tit_ico2.svg" alt="" className="icon"/></h6>
								<h2 className="fsz-80"> New Ideas For Our Modern Agency's </h2>
							</div>
							<div className="col-lg-4 w-auto">
								<Link to="/" className="rotate-box" data-speed="1" data-lag="0.4">
									<div className="rotate-circle rotate-text">
										<svg className="textcircle" viewBox="0 0 500 500">
											<defs>
												<path id="textcircle"
												      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
												</path>
											</defs>
											<text>
												<textPath href="#textcircle" textLength="900" > the creative process is Be Creative
												</textPath>
											</text>
										</svg>
									</div>
									<img src="./assets/img/logo.png" alt="" className="icon"/>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 offset-lg-1">
								<div className="text-content">
									<div className="text fsz-16 cr-777 mt-40"> Mauris auctor nulla ut nisl rutrum fermentum. Suspendse consectetur turpis nec ligula iaculis dapibus. Pellentesue iaculis purus at nibh gravida condimentum.Suspendisse faucibus eros congue turpis vulputate interdum.</div>
									<div className="text fsz-16 cr-777 mt-40"> <span className="cr-dark1 fw-bold"> Mauris tincidunt purus nulla, eget lacinia dui lacinia et. </span> Duis mattis elit at mollis facilisis. In efficitur nisl quam, consectetur ex egestas vel. Sed cursus enim vel finibus lobortis.</div>
									<Link to="/about"
									   className="cir-butn line-butn icon-175 mt-50 d-inline-flex">
										<div className="cont"><span className="txt fsz-30"> About Us </span> <img  src="./assets/img/arrow.svg" alt="" className="arrow"/></div>
									</Link>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="img">
									<img src="./assets/img/about1.jpg" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;