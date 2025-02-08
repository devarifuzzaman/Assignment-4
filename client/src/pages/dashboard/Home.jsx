import React, { useEffect, useState } from "react";
import MasterLayout from "../../components/dashboard/layout/MasterLayout.jsx";
import {ReadCategory, GetBlog, GetService, GetProfile} from "../../Api/ApiRoute.js"; // Make sure to add the new imports

const Home = () => {
	const [categoryCount, setCategoryCount] = useState(0);
	const [serviceCount, setServiceCount] = useState(0);
	const [blogCount, setBlogCount] = useState(0);
	const [teamCount, setTeamCount] = useState(0);

	const [error, setError] = useState(null); // For error handling

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch Category Count
				const categoryResult = await ReadCategory();
				if (categoryResult.status) {
					setCategoryCount(categoryResult.count);
				} else {
					setError("Failed to fetch categories: " + categoryResult.msg);
				}

				// Fetch Service Count
				const serviceResult = await GetService();
				if (serviceResult.status) {
					setServiceCount(serviceResult.count);
				} else {
					setError("Failed to fetch services: " + serviceResult.msg);
				}

				// Fetch Blog Count
				const blogResult = await GetBlog();
				if (blogResult.status) {
					setBlogCount(blogResult.count);
				} else {
					setError("Failed to fetch blogs: " + blogResult.msg);
				}

				// Fetch Team Count
				const teamResult = await GetProfile();
				if (teamResult.status) {
					setTeamCount(teamResult.count);
				} else {
					setError("Failed to fetch team members: " + teamResult.msg);
				}

			} catch (error) {
				setError("An error occurred while fetching data.");
				console.error("Error fetching data:", error);
			}
		};

		fetchData().then(fetchData);
	}, []);

	return (
		<MasterLayout title="Dashboard Home">
			<div className="container dashboard pt-5 mx-auto w-100">
				<div className="row gap-5">
					<div className="col-4 bg-orange1 p-3 text-center text-white">
						<h4>Category</h4>
						<h3>{categoryCount}</h3>
					</div>

					<div className="col-4 bg-orange1 p-3 text-center text-white">
						<h4>Blog</h4>
						<h3>{blogCount}</h3>
					</div>

					<div className="col-4 bg-orange1 p-3 text-center text-white">
						<h4>Service</h4>
						<h3>{serviceCount}</h3>
					</div>

					<div className="col-4 bg-orange1 p-3 text-center text-white">
						<h4>Team</h4>
						<h3>{teamCount}</h3>
					</div>
				</div>

				{error && <p className="text-danger">{error}</p>} {/* Error display */}
			</div>
		</MasterLayout>
	);
};

export default Home;