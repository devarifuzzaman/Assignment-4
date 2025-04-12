import React, { useEffect, useState } from "react";
import { GetBlog, imgUrl } from "../Api/ApiRoute.js";

const BlogSection = () => {
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 6; // Adjusted for better layout

	useEffect(() => {
		fetchBlogs().then(fetchBlogs);
	}, []);

	const fetchBlogs = async () => {
		try {
			const result = await GetBlog();
			if (result) {
				const updatedBlogs = result.data.map(blog => ({
					...blog
				}));
				setBlogs(updatedBlogs);
			} else {
				console.error("Failed to fetch blogs:", result?.msg);
			}
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	// Pagination logic
	const indexOfLastBlog = currentPage * blogsPerPage;
	const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
	const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
	const totalPages = Math.ceil(blogs.length / blogsPerPage);

	return (
		<section className="blogsec py-5">
			<div className="container projects portfolio-pr">
				<div className="title">
					<div className="row align-items-center">
						<div className="col-lg-12">
							<h2 className="sub-font mb-10">Our Blog</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="posts">
					<div className="row">
						{currentBlogs.length > 0 ? (
							currentBlogs.map(blog => (
								<div key={blog._id} className="col-lg-4 mb-4">
									<div className="post-card">
										<a href={`/singleBlog/${blog._id}`} className="img d-block th-280">
											<img src={imgUrl+blog.image} alt={blog.title} className="img-cover" />
										</a>
										<div className="info pt-30">
											<h6 className="title fsz-24 text-capitalize mb-20">
												<a href={`/singleBlog/${blog._id}`} className="hover-orange1">{blog.title}</a>
											</h6>
											<a href={`/singleBlog/${blog._id}`} className="more-link">
												<span className="txt">Read More</span>
												<img src="assets/img/arrow.svg" alt="arrow" className="arrow" />
											</a>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="col-lg-12 text-center">
								<p>No blog posts available.</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<nav aria-label="Page navigation">
					<ul className="pagination mx-auto justify-content-center pt-3 pb-5">
						<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
							<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</button>
						</li>
						{Array.from({ length: totalPages }, (_, i) => (
							<li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
								<button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
							</li>
						))}
						<li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
							<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</button>
						</li>
					</ul>
				</nav>
			)}
		</section>
	);
};

export default BlogSection;
