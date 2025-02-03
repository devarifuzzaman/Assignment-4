import React from 'react';
import { Link } from "react-router-dom";

const serviceData = [
	{
		id: 1,
		title: "Marketing Strategy",
		description: "Mauris finibus nisl ullamcorper purus sollicitudin laoreet. Cras sed feugiat velit, non faucibus nulla.",
		image: "assets/img/services/1.jpg",
		features: ["Email Marketing", "Product Marketing", "Promotion"],
		link: "/service",
	},
	{
		id: 2,
		title: "Digital Platform",
		description: "Mauris finibus nisl ullamcorper purus sollicitudin laoreet. Cras sed feugiat velit, non faucibus nulla.",
		image: "assets/img/services/2.jpg",
		features: ["Email Marketing", "Product Marketing", "Promotion"],
		link: "/service",
	},
	{
		id: 3,
		title: "Business Strategy",
		description: "Mauris finibus nisl ullamcorper purus sollicitudin laoreet. Cras sed feugiat velit, non faucibus nulla.",
		image: "assets/img/services/3.jpg",
		features: ["Email Marketing", "Product Marketing", "Promotion"],
		link: "/service",
	},
	{
		id: 4,
		title: "Web Application",
		description: "Mauris finibus nisl ullamcorper purus sollicitudin laoreet. Cras sed feugiat velit, non faucibus nulla.",
		image: "assets/img/services/1.jpg",
		features: ["Email Marketing", "Product Marketing", "Promotion"],
		link: "/service",
	},
];

const Services = () => {
	return (
		<section className="tc-services-pr">
			<div className="services-content">
				<div className="container">
					<div className="title wow fadeIn slow" data-wow-delay="0.2s">
						<div className="row justify-content-between align-items-end">
							<div className="col-lg-6">
								<h2 className="fsz-50 text-capitalize">
									We Provide Service To Support Company
								</h2>
							</div>
							<div className="col-lg-5">
								<div className="text fsz-16 cr-777 mt-4 ps-lg-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									venenatis felis id pharetra posuere.
									<img src="assets/img/vec1.png" alt="" className="vec" />
								</div>
							</div>
						</div>
					</div>
					<div className="cards">
						{serviceData.map((service, index) => (
							<div key={service.id} className="service-card wow fadeIn slow" data-wow-delay="2s"
							>
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-5">
										<div className="img">
											<img src={service.image} alt="" className="img-cover" />
										</div>
									</div>
									<div className="col-lg-4">
										<div className="info">
											<span className="num"> {`0${index + 1}`} </span>
											<h6 className="fsz-24 mb-15">{service.title}</h6>
											<div className="text cr-777 fsz-16">
												{service.description}
											</div>
											<ul className="icon-list">
												{service.features.map((feature, i) => (
													<li key={i}>
                            <span className="icon me-3">
                              <i className="far fa-plus"></i>
                            </span>
														<span className="txt">{feature}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="col-lg-2 w-auto">
										<a href={service.link}
											className="cir-butn line-butn icon-80 mt-50 d-inline-flex"
										>
											<div className="cont">
												<img
													src="assets/img/arrow.svg"
													alt=""
													className="arrow"
												/>
											</div>
										</a>
									</div>
								</div>
							</div>
						))}
						<Link to="/service" className="cir-butn icon-200">
							<div className="cont">
								<span className="txt fsz-16"> View All Works </span>
								<img src="assets/img/arrow_wh.svg" alt="" className="arrow" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
