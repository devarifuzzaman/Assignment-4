import React from 'react';
import MasterLayout from "../components/layout/MasterLayout.jsx";
import HeroSection from "../components/HeroSection.jsx";
import MarqueSlider from "../components/MarqueSlider.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Services from "../components/Services.jsx";
import BlogSec from "../components/BlogSec.jsx";
import Team from "../components/Team.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Clients from "../components/Clients.jsx";
import Skills from "../components/Skills.jsx";
import Testimonial from "../components/Testimonial.jsx";

const Home = () => {
	return (
		<MasterLayout>
			<HeroSection/>
			<MarqueSlider/>
			<AboutSection/>
			<Services/>
			<Portfolio/>
			<Clients/>
			<Skills/>
			<Team/>
			<BlogSec/>
			<Testimonial/>
		</MasterLayout>
	);
};

export default Home;