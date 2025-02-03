import React, {useEffect} from 'react';
import CommonHeroSec from "../components/CommonHeroSec.jsx";
import MasterLayout from "../components/layout/MasterLayout.jsx";
import BlogPageSec from "../components/blogPage/BlogPageSec.jsx";

const Blog = () => {
	useEffect(() => {
		// Add class to body
		document.body.classList.add("blog-page-st1");

		// Cleanup: Remove class when component unmounts
		return () => {
			document.body.classList.remove("blog-page-st1");
		};
	}, []);

	return (
		<MasterLayout>
			<CommonHeroSec
				props={{
					pageTitle: "Blog",
					headingText: "We are a digital agency for visually compelling about stories.",
					paraText:"We craft visually compelling stories that captivate and inspire. Through innovative design and strategic storytelling, we bring brands to life. Our digital expertise transforms ideas into immersive experiences. Let us help you connect with your audience in unforgettable ways. Together, we’ll create stories that leave a lasting impression."
				}}
			/>
			<BlogPageSec/>
		</MasterLayout>
	);
};

export default Blog;