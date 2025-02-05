import React from 'react';
import MasterLayout from "../components/layout/MasterLayout.jsx";
import HeroSection from "../components/HeroSection.jsx";
import BlogSec from "../components/BlogSec.jsx";

const Home = () => {
	return (
		<MasterLayout>
			<HeroSection/>
			<BlogSec/>
		</MasterLayout>
	);
};

export default Home;