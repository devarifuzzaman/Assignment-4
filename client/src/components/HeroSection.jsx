import React from 'react';

const HeroSection = () => {
	return (
		<>
			<div className="tc-header-pr">
				<div className="container">
					<div className="row gx-lg-0">
						<div className="col-lg-7">
							<div className="content pt-150">
								<div className="mini-img mb-40 offset-lg-6">
									<img src="./assets/img/header_mini.jpg" alt="" className="img-cover"/>
								</div>
								<h1 className="bold">
									<div className="text-row">
										<div className="txt"> Hello, I'm Arifuzzaman Based in Bangladesh</div>
										<img src="./assets/img/vec2.svg" alt="" className="shap"/> Creative
									</div>
									<div className="text-row"> Full-Stack</div>
									<div className="text-row">Web Developer</div>

								</h1>
								<div className="text cr-777 fsz-21 fw-500 mt-50 col-lg-8 offset-lg-2"> <span
									className="cr-dark1 d-inline"> Our goal is to streamline your workflow,  making it faster and easier than ever before. </span>We aim to simplify complex tasks, saving you time and effort. <span className="cr-dark1 d-inline"> By leveraging innovative tools and solutions, we enhance productivity and efficiency. </span></div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="hero-img">
								<img src="./assets/img/herosec.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
				<img src="./assets/img/header_shaps.png" alt="" className="header-shaps"/>
				<span className="float-txt"> alex smith </span>
			</div>
		</>
	);
};

export default HeroSection;