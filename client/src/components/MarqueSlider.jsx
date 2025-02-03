import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Correct import path

const MarqueSlider = () => {
	const slides = [
		"Brand Design",
		"Web Development",
		"Graphic Design",
		"UI/UX Design",
		"Digital Marketing",
	];

	return (
		<section className="tc-marq-sliders">
			{/* Left-to-right scrolling slider */}
			<Swiper
				modules={[Autoplay]}
				slidesPerView="auto"
				spaceBetween={150}
				centeredSlides={true}
				speed={20000}
				autoplay={{ delay: 0, disableOnInteraction: false }} // Enable autoplay
				loop={true}
				className="slider swiper-initialized swiper-horizontal swiper-pointer-events"
			>
				{slides.concat(slides).map((slide, index) => (
					<SwiperSlide key={index}>
						<h6 className="item fsz-24">{slide}</h6>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Right-to-left scrolling slider */}
			<Swiper
				modules={[Autoplay]}
				slidesPerView="auto"
				spaceBetween={150}
				centeredSlides={true}
				speed={20000}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				loop={true}
				dir="rtl"
				className="slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl"
			>
				{slides.concat(slides).map((slide, index) => (
					<SwiperSlide key={index}>
						<h6 className="item fsz-24">{slide}</h6>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default MarqueSlider;
