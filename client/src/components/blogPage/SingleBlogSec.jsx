import React, {useEffect} from 'react';

const SingleBlogSec = () => {
	useEffect(() => {
		// Add class to body
		document.body.classList.add("post-page-st1");

		// Cleanup: Remove class when component unmounts
		return () => {
			document.body.classList.remove("post-page-st1");
		};
	}, []);



	return (

		<>

			<header className="tc-header-st16">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="tags">
								<div className="date pe-20 me-20 border-end border-1"><span> by </span> <span
									className="cr-orange1"> Thumamah </span></div>
								<div className="tag me-30"> Agency</div>
								<div className="date"><i className="fal fa-calendar-days me-2"></i> <span
									className="txt"> 09 March 2024 </span></div>
							</div>
							<h1 className="fsz-50 mb-30"> Portrait of adult male of working from home at night </h1>
							<div className="text fsz-18 cr-666 pe-lg-5"> Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed magna accumsan neque fermentum laoreet. Ut nunc.
							</div>
						</div>
						<div className="col-lg-4">
							<a href="/" className="rotate-box mb-2 mt-5 mt-lg-0" data-speed="1" data-lag="0.4">
								<div className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase">
									<svg className="textcircle" viewBox="0 0 500 500">
										<defs>
											<path id="textcircle"
											      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
											</path>
										</defs>
										<text>
											<textPath href="#textcircle" textLength="900"> the creative process is Be Creative</textPath>
										</text>
									</svg>
								</div>
								<span className="icon"> <img className="w-75" src="./logo.png" alt=""/> </span>
							</a>
						</div>
					</div>
				</div>
			</header>


			<section className="tc-content-st16 pt-50 pb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="main-info pe-lg-5">
								<h5 className="fsz-30 mb-20"> We combine our passion </h5>
								<div className="text fsz-16 cr-666 mb-20"> Duis sed augue condimentum, blandit sapien
								                                           in, accumsan eros. Curabitur sodales pulvinar
								                                           libero et venenatis. Nullam eleifendrisus a
								                                           quam dictum auctor. Mauris at leo non dui
								                                           euismod varius. Cras vel erat at est aliquam
								                                           laoreet. Donec tincidunt, nunc eu gravida
								                                           malesuada, tellus leo. Maecenas sed tortor
								                                           molestie, sagittis nibh sit amet, dapibus
								                                           felis.
								</div>
								<div className="text fsz-16 cr-666 mb-20"> Maecenas sed tortor molestie, sagittis nibh
								                                           sit amet, dapibus felis. Vivamus sed neque
								                                           iaculis, ultrices nulla eu, venenat dui.
								                                           Praesent luctus urna eu dapibus pulvinar.
								                                           Curabitur sed magna accumsan neque fermentum
								                                           laoreet. Ut nunc.
								</div>
								<ul className="info-list mb-50">
									<li><strong> Regular </strong> <span> Unique and Modern Style </span></li>
									<li><strong> Medium </strong> <span> Super Clear and Clean Layout </span></li>
									<li><strong> SemiBold </strong> <span> Awesome and Creative Design </span></li>
									<li><strong> Blod </strong> <span> Easily customizable Figma files </span></li>
								</ul>
								<div className="qt-txt fsz-18 fw-600 cr-111 d-flex align-items-start mb-30"><img
									src="assets/img/icons/qt1.svg" alt="" className="icon me-4"/> Lorem ipsum dolor sit
								                                                                  amet, consectetur
								                                                                  adipiscing elit. Ut
								                                                                  iaculis dignissim
								                                                                  mauris a hendrerit
								                                                                  Donec arcu ligula,
								                                                                  ornare eu leo non,
								                                                                  pulvinar blandit
								                                                                  felis. Aenean
								                                                                  consequat magna vitae
								                                                                  dolor accumsan
								                                                                  iaculis.
								</div>
								<div className="text fsz-16 cr-666 mb-20"> Duis sed augue condimentum, blandit sapien
								                                           in, accumsan eros. Curabitur sodales pulvinar
								                                           libero et venenatis. Nullam eleifend risus a
								                                           quam dictum auctor. Mauris at leo non dui
								                                           euismod varius. Cras vel erat at est aliquam
								                                           laoreet. Donec tincidunt, nunc eu gravida
								                                           malesuada, tellus leo. Maecenas sed tortor
								                                           molestie, sagittis nibh sit amet, dapibus
								                                           felis.
								</div>
								<div className="text fsz-16 cr-666 mb-20"> Maecenas sed tortor molestie, sagittis nibh
								                                           sit amet, dapibus felis. Vivamus sed neque
								                                           iaculis, ultrices nulla eu, venenatisdui.
								                                           Praesent luctus urna eu dapibus pulvinar.
								                                           Curabitur sed magna accumsan neque fermentum
								                                           laoreet. Ut nunc.
								</div>
								<ul className="check-list">
									<li><span className="check"> <i className="fal fa-check"></i> </span> <span
										className="txt"> Will you provide website layout about design </span></li>
									<li><span className="check"> <i className="fal fa-check"></i> </span> <span
										className="txt"> Branding With Business Agency </span></li>
									<li><span className="check"> <i className="fal fa-check"></i> </span> <span
										className="txt"> Why should I work with an agency over a freelancer </span></li>
									<li><span className="check"> <i className="fal fa-check"></i> </span> <span
										className="txt"> How much do you charge for branding </span></li>
								</ul>
								<div className="txt fsz-16 mt-30 pt-15 border-top"><strong> Tag Here: </strong> <p
									className="d-inline-block ms-lg-4"> Creative, Consultant, Business, UX/UI
								                                        Designer </p></div>
							</div>

						</div>
						<div className="col-lg-4">
							<div className="widgets mt-5 mt-lg-0">
								<div className="widget-card">
									<h6 className="fsz-16 mb-20 text-capitalize"> Search Here </h6>
									<div className="search-group">
										<input type="text" className="form-control"
										       placeholder="Enter Your Keyword..."/>
										<button><i className="fal fa-search"></i></button>
									</div>
								</div>
								<div className="widget-card">
									<h6 className="fsz-16 mb-20 text-capitalize"> Tags list </h6>
									<ul className="tags-list">
										<li><a href="#"> <span className="txt"> UX strategy </span> <span
											className="num"> 9 </span> </a></li>
										<li><a href="#"> <span className="txt"> Information architecture </span> <span
											className="num"> 5 </span> </a></li>
										<li><a href="#"> <span className="txt"> Prototyping </span> <span
											className="num"> 11 </span> </a></li>
										<li><a href="#"> <span className="txt"> Wireframing </span> <span
											className="num"> 7 </span> </a></li>
										<li><a href="#"> <span className="txt"> UI Design </span> <span
											className="num"> 6 </span> </a></li>
										<li><a href="#"> <span className="txt"> Figma Design </span> <span
											className="num"> 3 </span> </a></li>
									</ul>
								</div>
								<div className="widget-card">
									<h6 className="fsz-16 mb-20 text-capitalize"> Social Icon </h6>
									<div className="social-icons">
										<a href="#"> <i className="fab fa-facebook-f"></i> </a>
										<a href="#"> <i className="fab fa-instagram"></i> </a>
										<a href="#"> <i className="fab fa-x-twitter"></i> </a>
										<a href="#"> <i className="fab fa-behance"></i> </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleBlogSec;