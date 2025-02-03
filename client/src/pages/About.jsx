import React,{useEffect} from 'react';
import MasterLayout from "../components/layout/MasterLayout.jsx";
import CommonHeroSec from "../components/CommonHeroSec.jsx";
import GoalSec from "../components/aboutPage/GoalSec.jsx";

import Services from "../components/Services.jsx";
import Team from "../components/Team.jsx";
import Clients from "../components/Clients.jsx";

const About = () => {
	useEffect(() => {
		// Add class to body
		document.body.classList.add("about-page-st1");

		// Cleanup: Remove class when component unmounts
		return () => {
			document.body.classList.remove("about-page-st1");
		};
	}, []);

	return (
		<MasterLayout>
			<CommonHeroSec
				props={{
					pageTitle: "About",
					headingText: "We are a digital agency for visually compelling about stories.",
					paraText:"We craft visually compelling stories that captivate and inspire. Through innovative design and strategic storytelling, we bring brands to life. Our digital expertise transforms ideas into immersive experiences. Let us help you connect with your audience in unforgettable ways. Together, we’ll create stories that leave a lasting impression."
				}}
			/>
			<GoalSec/>
			<Services/>
			<Team/>
			<Clients/>
		</MasterLayout>
	);
};

export default About;
