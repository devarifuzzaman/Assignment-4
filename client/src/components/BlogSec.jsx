import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Swiper pagination style
import {Autoplay, Pagination} from "swiper/modules";
import {Link} from "react-router-dom"; // Import the Pagination module

const BlogSection = () => {
	return (
		<section className="tc-blog-st2">
			<div className="container wow fadeIn slow" data-wow-delay="0.2s">
				<div className="title-wrapper mb-50">
					<div className="row justify-content-between">
						<div className="col-lg-4 text-lg-end">
							<div className="icon icon-30 ms-lg-auto">
								<img src="assets/img/icons/un2.svg" alt="" />
							</div>
							<div className="text fsz-16 cr-777 mt-20">
								Fusce eu eros nec felis venenatis fermentum sit amet eget turpis.
								Integer tempus massa ac arcu sollicitudin Integer tempus massa ac
								arcu sollicitudin sollicitudin Vivamus neque urna sollicitudin neque
								urna.
							</div>
						</div>
						<div className="col-lg-1">
							<div className="line"></div>
						</div>
						<div className="col-lg-5">
							<div className="title">
								<h6 className="fsz-16 fw-200">
									<img src="assets/img/icons/tit_ico.svg" alt="" className="icon" />{" "}
									<span className="txt mx-2">Best Of Our News & Blogs</span>{" "}
									<img src="assets/img/icons/tit_ico2.svg" alt="" className="icon" />
								</h6>
								<h2 className="fsz-50 mt-30">Our Best Solutions News & Blogs</h2>
							</div>
						</div>
					</div>
				</div>

				{/* Swiper Slider */}
				<div className="posts-slider">
					<Swiper
						modules={[Pagination,Autoplay]} // Include the Pagination module
						spaceBetween={30} // Adjust the space between slides if necessary
						slidesPerView={"auto"} // Adjust to show one slide at a time
						pagination={{ clickable: true }} // Enable clickable pagination
						loop={true} // Make it loop
						speed={10000}
						autoplay={{delay:0, disableOnInteraction: false ,pauseOnMouseEnter: true}}
						breakpoints={{
							320:{slidesPerView:1},
							640:{slidesPerView:2},
							1400:{slidesPerView:3},
						}}
						className="swiper-wrapper">
						{/* Each SwiperSlide represents a post */}
						<SwiperSlide>
							<div className="post-card">
								<Link to="/" className="img d-block th-280">
									<img src="./assets/img/posts/1.jpg" alt="" className="img-cover" />
								</Link>
								<div className="info pt-30">
									<div className="tags">
										<div className="date pe-20 me-20 border-end border-1">
											<span>by</span> <span className="cr-orange1">Arif</span>
										</div>
										<div className="tag me-30">Agency</div>
										<div className="date">
											<i className="fal fa-calendar-days me-2"></i>
											<span className="txt">09 March 2024</span>
										</div>
									</div>
									<h6 className="title fsz-24 text-capitalize mb-20">
										<Link to="/" className="hover-orange1">
											Portrait of adult male working <br /> from home at night
										</Link>
									</h6>
									<Link to="/" className="more-link">
										<span className="txt">Read More</span>
										<img src="assets/img/arrow.svg" alt="" className="arrow" />
									</Link>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="post-card">
								<Link to="/" className="img d-block th-280">
									<img src="./assets/img/posts/2.jpg" alt="" className="img-cover" />
								</Link>
								<div className="info pt-30">
									<div className="tags">
										<div className="date pe-20 me-20 border-end border-1">
											<span>by</span> <span className="cr-orange1">Arif</span>
										</div>
										<div className="tag me-30">Agency</div>
										<div className="date">
											<i className="fal fa-calendar-days me-2"></i>
											<span className="txt">09 March 2024</span>
										</div>
									</div>
									<h6 className="title fsz-24 text-capitalize mb-20">
										<Link to="/" className="hover-orange1">
											Portrait of adult male working <br /> from home at night
										</Link>
									</h6>
									<Link to="/" className="more-link">
										<span className="txt">Read More</span>
										<img src="./assets/img/arrow.svg" alt="" className="arrow" />
									</Link>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="post-card">
								<Link to="/" className="img d-block th-280">
									<img src="./assets/img/posts/3.jpg" alt="" className="img-cover" />
								</Link>
								<div className="info pt-30">
									<div className="tags">
										<div className="date pe-20 me-20 border-end border-1">
											<span>by</span> <span className="cr-orange1">Arif</span>
										</div>
										<div className="tag me-30">Agency</div>
										<div className="date">
											<i className="fal fa-calendar-days me-2"></i>
											<span className="txt">09 March 2024</span>
										</div>
									</div>
									<h6 className="title fsz-24 text-capitalize mb-20">
										<Link to="/" className="hover-orange1">
											Portrait of adult male working <br /> from home at night
										</Link>
									</h6>
									<Link to="/" className="more-link">
										<span className="txt">Read More</span>
										<img src="./assets/img/arrow.svg" alt="" className="arrow" />
									</Link>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="post-card">
								<Link to="/" className="img d-block th-280">
									<img src="./assets/img/posts/2.jpg" alt="" className="img-cover" />
								</Link>
								<div className="info pt-30">
									<div className="tags">
										<div className="date pe-20 me-20 border-end border-1">
											<span>by</span> <span className="cr-orange1">Arif</span>
										</div>
										<div className="tag me-30">Agency</div>
										<div className="date">
											<i className="fal fa-calendar-days me-2"></i>
											<span className="txt">09 March 2024</span>
										</div>
									</div>
									<h6 className="title fsz-24 text-capitalize mb-20">
										<Link to="/" className="hover-orange1">
											Portrait of adult male working <br /> from home at night
										</Link>
									</h6>
									<Link to="/" className="more-link">
										<span className="txt">Read More</span>
										<img src="./assets/img/arrow.svg" alt="" className="arrow" />
									</Link>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="post-card">
								<Link to="/" className="img d-block th-280">
									<img src="./assets/img/posts/2.jpg" alt="" className="img-cover" />
								</Link>
								<div className="info pt-30">
									<div className="tags">
										<div className="date pe-20 me-20 border-end border-1">
											<span>by</span> <span className="cr-orange1">Arif</span>
										</div>
										<div className="tag me-30">Agency</div>
										<div className="date">
											<i className="fal fa-calendar-days me-2"></i>
											<span className="txt">09 March 2024</span>
										</div>
									</div>
									<h6 className="title fsz-24 text-capitalize mb-20">
										<Link to="/" className="hover-orange1">
											Portrait of adult male working <br /> from home at night
										</Link>
									</h6>
									<Link to="/" className="more-link">
										<span className="txt">Read More</span>
										<img src="./assets/img/arrow.svg" alt="" className="arrow" />
									</Link>
								</div>
							</div>
						</SwiperSlide>

					</Swiper>


					<div className="swiper-pagination swiper-pagination-dark "></div>

				</div>
			</div>
		</section>
	);
};

export default BlogSection;
