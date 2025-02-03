import React from 'react';

const Social = () => {
	return (
		<>
			<section className="tc-process-st2">
				<div className="container">
					<div className="row justify-content-space-evenly flex">
						<div className="col-lg-8">
							<div className="title-side wow fadeIn slow" data-wow-delay="0.2s">
								<div className="icon th-50 mb-15">
									<img src="./assets/img/icons/vec1.svg" alt=""/>
								</div>
								<h2> Our goal is making your <span> working </span> process faster
								     and <span> easier </span>. </h2>
								<div className="cont">
									<div className="lg-txt sub-font"> DevArif</div>
									<img src="./assets/img/icons/arrow_lg.svg" alt="" className="arrow"/>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tc-header-st13">
								<ul className="check-list mb-30">
									<li><a href="#"> <i className="fal fa-check me-2"></i> +55 (9900) 666 22 </a></li>
									<li><a href="#"> <i className="fal fa-check me-2"></i> info.mirpur@gmail.com </a>
									</li>
									<li><a href="#"> <i className="fal fa-check me-2"></i> Mirpur 12, Block C, Dhaka, BD. </a>
									</li>
								</ul>
								<div className="social-links">
									<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="https://x.com" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-x-twitter"></i>
									</a>
									<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-linkedin-in"></i>
									</a>
									<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	);
};

export default Social;