import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";

const Testimonial = () => {
	return (
		<>
			{/*<section className="tc-testimonials-pr">*/}
			{/*	<div className="container">*/}
			{/*		<div*/}
			{/*			className="title text-center mb-50 wow fadeIn slow"*/}
			{/*			data-wow-delay="0.2s"*/}
			{/*		>*/}
			{/*			<div className="row justify-content-center">*/}
			{/*				<div className="col-lg-7">*/}
			{/*					<h6 className="fsz-16 fw-200 mb-40">*/}
			{/*						<img src="assets/img/icons/tit_ico.svg" alt="" className="icon"/>{" "}*/}
			{/*						<span className="txt mx-2"> What client Says about our Artech </span>*/}
			{/*						<img src="assets/img/icons/tit_ico2.svg" alt="" className="icon"/>*/}
			{/*					</h6>*/}
			{/*					<h2 className="fsz-50">*/}
			{/*						Best of our Problem Solutions For Our Testimonials*/}
			{/*					</h2>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className="row align-items-center gx-5 wow fadeIn slow" data-wow-delay="0.2s">*/}
			{/*			<div className="col-lg-6">*/}
			{/*				<Swiper*/}
			{/*					modules={[Pagination, Autoplay]}*/}
			{/*					pagination={{clickable: true}}*/}
			{/*					autoplay={{delay: 10, pauseOnMouseEnter: true}}*/}
			{/*					speed={5000}*/}
			{/*					spaceBetween={20}*/}
			{/*					slidesPerView={1}*/}
			{/*					loop={true}*/}
			{/*					className="testi-slider"*/}
			{/*				>*/}
			{/*					<SwiperSlide>*/}
			{/*						<div className="testi-card">*/}
			{/*							<div className="rate-wrapper">*/}
            {/*        <span className="icon">*/}
            {/*          <img src="assets/img/icons/qt.svg" alt=""/>*/}
            {/*        </span>*/}
			{/*								<span className="num"> 5.00k </span>*/}
			{/*								<div className="stars cr-orange1 ms-20">*/}
			{/*									{[...Array(5)].map((_, i) => (*/}
			{/*										<i key={i} className="fas fa-star"></i>*/}
			{/*									))}*/}
			{/*								</div>*/}
			{/*								<span className="fsz-16 op-4 ms-2 text-capitalize"> reviews </span>*/}
			{/*							</div>*/}
			{/*							<div className="main-txt">*/}
			{/*								"Etiam volutpat tortor magna, vitae sollicitudin scelerisque."*/}
			{/*							</div>*/}
			{/*							<div className="user-info">*/}
			{/*								<a href="#" className="butn-1 rounded-pill border-2 border border-dark1">*/}
			{/*									<span> Content Marketing </span>*/}
			{/*								</a>*/}
			{/*								<h6 className="fsz-24 fw-500 mt-20"> LT. Kamrul Islam Noor </h6>*/}
			{/*							</div>*/}
			{/*						</div>*/}
			{/*					</SwiperSlide>*/}

			{/*					<SwiperSlide>*/}
			{/*						<div className="testi-card">*/}
			{/*							<div className="rate-wrapper">*/}
            {/*        <span className="icon">*/}
            {/*          <img src="assets/img/icons/qt.svg" alt=""/>*/}
            {/*        </span>*/}
			{/*								<span className="num"> 5.00k </span>*/}
			{/*								<div className="stars cr-orange1 ms-20">*/}
			{/*									{[...Array(5)].map((_, i) => (*/}
			{/*										<i key={i} className="fas fa-star"></i>*/}
			{/*									))}*/}
			{/*								</div>*/}
			{/*								<span className="fsz-16 op-4 ms-2 text-capitalize"> reviews </span>*/}
			{/*							</div>*/}
			{/*							<div className="main-txt">*/}
			{/*								"Cras condimentum sapien viver Aliquam efficitur daius liero daibus."*/}
			{/*							</div>*/}
			{/*							<div className="user-info">*/}
			{/*								<a href="#" className="butn-1 rounded-pill border-2 border border-dark1">*/}
			{/*									<span> Digital Marketer </span>*/}
			{/*								</a>*/}
			{/*								<h6 className="fsz-24 fw-500 mt-20"> Naion Monikal Nico </h6>*/}
			{/*							</div>*/}
			{/*						</div>*/}
			{/*					</SwiperSlide>*/}
			{/*				</Swiper>*/}

			{/*				<div className="swiper-pagination"></div>*/}
			{/*			</div>*/}
			{/*			<div className="col-lg-1 d-none d-lg-block">*/}
			{/*				<div className="trans-txt">*/}
			{/*					<img src="assets/img/vec3.svg" alt="" className="icon"/>*/}
			{/*					<span className="txt"> What Client Says? </span>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*			<div className="col-lg-5">*/}
			{/*				<div className="img ms-lg-5 mt-5 mt-lg-0">*/}
			{/*					<img src="assets/img/testi.png" alt=""/>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}

			<section className="tc-testimonials-st4">
				<div className="container wow fadeIn slow" data-wow-delay="0.2s">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="info wow fadeIn slow" data-wow-delay="0.2s">
								<h6 className="fsz-24"> What Client Says? </h6>
								<div className="lg-txt sub-font"> testimonial</div>
								<div className="slider">
									<Swiper
										modules={[Pagination, Autoplay]}
										pagination={{clickable: true}}
										autoplay={{delay: 4000, pauseOnMouseEnter: true}}
										speed={3000}
										spaceBetween={20}
										slidesPerView={1}
										loop={true}
										className="testi-slider"
									>
										<SwiperSlide>
											<div className="testi-card">
												<div className="rate-wrapper">
								                    <span className="icon">
								                      <img src="assets/img/icons/qt.svg" alt=""/>
								                    </span>
													<span className="num"> 5.00k </span>
													<div className="stars cr-orange1 ms-20">
														{[...Array(5)].map((_, i) => (
															<i key={i} className="fas fa-star"></i>
														))}
													</div>
													<span className="fsz-16 op-4 ms-2 text-capitalize"> reviews </span>
												</div>
												<div className="main-txt">
													" Etiam volutpat tortor magna, vitae sollicitudin diam scelerisque a. Cras condimentum sapien a viverra tristique. Aliquam efficitur dapibus libero a dapibus."
												</div>
												<div className="user-info mt-50">
													{/*<Link  to="#" className="butn-1 rounded-pill border-2 border border-white hover-bg-white butn-wh text-black">*/}
													{/*	<span> Content Marketing </span>*/}
													{/*</Link>*/}
													<h6 className="fsz-24 fw-500 mt-20 text-black"> LT. Kamrul Islam Noor </h6>
												</div>
											</div>
										</SwiperSlide>

										<SwiperSlide>
											<div className="testi-card">
												<div className="rate-wrapper">
								                    <span className="icon">
								                      <img src="assets/img/icons/qt.svg" alt=""/>
								                    </span>
													<span className="num"> 5.00k </span>
													<div className="stars cr-orange1 ms-20">
														{[...Array(5)].map((_, i) => (
															<i key={i} className="fas fa-star"></i>
														))}
													</div>
													<span className="fsz-16 op-4 ms-2 text-capitalize"> reviews </span>
												</div>
												<div className="main-txt">
													" Etiam volutpat tortor magna, vitae sollicitudin diam scelerisque a. Cras condimentum sapien a viverra tristique. Aliquam efficitur dapibus libero a dapibus."
												</div>
												<div className="user-info mt-50">
													{/*<a href="#" className="butn-1 rounded-pill border-2 border border-white hover-bg-white butn-wh text-black">*/}
													{/*	<span> Content Marketing </span>*/}
													{/*</a>*/}
													<h6 className="fsz-24 fw-500 mt-20"> LT. Kamrul Islam Noor </h6>
												</div>
											</div>
										</SwiperSlide>


									</Swiper>

									<div className="swiper-pagination"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img src="./assets/img/testi_imgs.png" alt="" className="imgs"/>
			</section>
		</>
	);
};

export default Testimonial;
