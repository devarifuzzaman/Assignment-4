import React, { useEffect, useState } from 'react';
import { baseURL, GetProfile } from "../../Api/ApiRoute.js";

const Team = () => {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		fetchProfile();
	}, []);

	const fetchProfile = async () => {
		try {
			const result = await GetProfile();
			if (result) {
				const updatedProfile = result.data.map(profile => ({
					...profile,
					image: profile.image ? `${baseURL.replace("/api", "/upload-file")}/${profile.image}` : "assets/img/default.jpg"
				}));
				setProfile(updatedProfile);
			} else {
				console.error("Failed to fetch profile:", result?.msg);
			}
		} catch (error) {
			console.error("Error fetching profile:", error);
		}
	};

	return (
		<>
			<section className="team">
				<div className="container projects portfolio-pr">
					<div className="title">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<h2 className="sub-font mb-10"> About </h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="title text-center col-lg-7 mx-auto wow fadeIn slow" data-wow-delay="0.2s">
						<h2 className="fsz-50 mt-30"> Best of our Problem Solutions For Our Special Team </h2>
					</div>
					<div className="cards">
						<div className="row">
							{profile.map((profileItem, index) => (
								<div className="col-lg-3" key={index}>
									<div className="team-card">
										<div className="img">
											<img src={profileItem.image} alt={profileItem.name} className="img-cover" />
										</div>
										<div className="info">
											<div className="social-icons">
												<a href={profileItem.facebook} className="link"> <i className="fab fa-facebook-f"></i> </a>
												<a href={profileItem.twitter} className="link"> <i className="fab fa-x-twitter"></i> </a>
												<a href={profileItem.linkedin} className="link"> <i className="fab fa-linkedin-in"></i> </a>
												<a href={profileItem.github} className="link"> <i className="fab fa-github"></i> </a>
											</div>
											<p className="fsz-16 cr-777 mb-2"> {profileItem.designation || "Role Empty"} </p>
											<h6 className="fsz-24 fw-500 text-capitalize"> {profileItem.name || "Unknown"} </h6>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
