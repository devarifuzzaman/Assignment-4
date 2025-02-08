import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GetSingleBlog, baseURL } from "../Api/ApiRoute.js";

const SingleBlog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("Blog ID from URL:", id); // Debugging ID

		const fetchBlog = async () => {
			try {
				const result = await GetSingleBlog(id);
				// console.log("API Response:", result); // Debugging API Response

				if (result) {
					// Construct the image URL
					const imageUrl = result.image
						? `${baseURL.replace("/api", "/upload-file")}/${result.data.image}`
						: "assets/img/default.jpg";

					// Update the blog state with the fetched data
					setBlog({
						...result,
						image: imageUrl,
					});
				} else {
					setError("Blog not found or invalid data format");
				}
			} catch (err) {
				console.error("Error fetching blog:", err);
				setError("Error fetching blog data. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchBlog();
	}, [id]);

	// Render loading state
	if (loading) {
		return <h2 className="text-center py-5">Loading...</h2>;
	}

	// Render error state
	if (error) {
		return <h2 className="text-center py-5 text-danger">{error}</h2>;
	}

	// Render if no blog data is available
	if (!blog) {
		return <h2 className="text-center py-5">No blog data found.</h2>;
	}

	// Render the blog details
	return (
		<section className="single-blog py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<Link to="/blog" className="btn btn-primary mb-5">
							← Back to Blogs
						</Link>
						<div className="blog-detail">
							<img
								src={blog.image}
								alt={blog.title}
								className="img-fluid rounded mb-4"
							/>
							<h2 className="title mb-3">{blog.title}</h2>
							<p className="text-muted mb-4">
								{blog.des || "No description available."}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleBlog;