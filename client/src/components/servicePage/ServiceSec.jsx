import React, {useEffect, useState} from 'react';
import {baseURL, GetService} from "../../Api/ApiRoute.js";

const ServiceSec = () => {
	const [service, setservice] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const servicePerPage = 6; // Adjusted for better layout

	useEffect(() => {
		fetchservice();
	}, []);

	const fetchservice = async () => {
		try {
			const result = await GetService();
			if (result) {
				const updatedservice = result.data.map(service => ({
					...service,
					image: service.image ? `${baseURL.replace("/api", "/upload-file")}/${service.image}` : "assets/img/default.jpg"
				}));
				setservice(updatedservice);
			} else {
				console.error("Failed to fetch service:", result?.msg);
			}
		} catch (error) {
			console.error("Error fetching service:", error);
		}
	};

	// Pagination logic
	const indexOfLastservice = currentPage * servicePerPage;
	const indexOfFirstservice = indexOfLastservice - servicePerPage;
	const currentservice = service.slice(indexOfFirstservice, indexOfLastservice);
	const totalPages = Math.ceil(service.length / servicePerPage);

	return (
		<>
			<section className="projects portfolio-pr">
					<div className="container">
						<div className="title ">
							<div className="row align-items-center">
								<div className="col-lg-12">
									<h2 className="sub-font mb-10"> Our Services </h2>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-content mt-5">
							<div className="projects container">
								<div className="row">
									{currentservice.length > 0 ? (
										currentservice.map(service=> (
											<div key={service._id} className="col-lg-4 mb-4">
												<div className="post-card">
													<a href={`/singleservice/${service._id}`} className="img d-block th-280">
														<img src={service.image} alt={service.title} className="img-cover" />
													</a>
													<div className="info pt-30">
														<h6 className="title fsz-24 text-capitalize mb-20">
															<a href={`/singleservice/${service._id}`} className="hover-orange1">{service.title}</a>
														</h6>
														<a href={`/singleservice/${service._id}`} className="more-link">
															<span className="txt">Read More</span>
															<img src="assets/img/arrow.svg" alt="arrow" className="arrow" />
														</a>
													</div>
												</div>
											</div>
										))
									) : (
										<div className="col-lg-12 text-center">
											<p>No service available.</p>
										</div>
									)}
								</div>
							</div>
						</div>

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

		</>
	);
};

export default ServiceSec;