import React from 'react';
import CommonHeroSec from "../components/CommonHeroSec.jsx";
import MasterLayout from "../components/layout/MasterLayout.jsx";
import ContactForm from "../components/contactPage/ContactForm.jsx";
import Social from "../components/contactPage/Social.jsx";

const Contact = () => {
	return (
		<MasterLayout>
			<CommonHeroSec
				props={{
					pageTitle: "Contact",
					headingText: "We are a digital agency for visually compelling about stories.",
					paraText:"We craft visually compelling stories that captivate and inspire. Through innovative design and strategic storytelling, we bring brands to life. Our digital expertise transforms ideas into immersive experiences. Let us help you connect with your audience in unforgettable ways. Together, we’ll create stories that leave a lasting impression."
				}}
			/>
			<Social/>
			<ContactForm/>
		</MasterLayout>
	);
};

export default Contact;