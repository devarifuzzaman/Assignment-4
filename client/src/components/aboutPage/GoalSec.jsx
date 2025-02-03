import React from 'react';

const GoalSec = () => {
	return (
		<>
			<section className="tc-about-st10">
				<div className="main-img">
					<img src="./assets/img/about.jpg" alt="" className="img-cover"/>
				</div>
				<div className="numbers wow fadeIn slow" data-wow-delay="0.2s">
					<div className="container">
						<div className="row justify-content-end">
							<div className="col-lg-3">
								<div className="number-card">
									<div className="cont">
										<p><span> Product Sale </span> Per Day Using Out Tools. </p>
										<h3 className="num"> 31.2K </h3>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="number-card">
									<div className="cont">
										<p><span> Downloaded </span> Total In 2018-2024. </p>
										<h3 className="num"> 2.3M </h3>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="number-card">
									<div className="cont">
										<p><span> Trusted By </span> Customers Worldwide Over. </p>
										<h3 className="num"> 50M </h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about">
					<div className="container">
						<div className="row gx-5">
							<div className="col-lg-6">
								<div className="title-side wow fadeIn slow" data-wow-delay="0.2s">
									<div className="icon th-50 mb-15">
										<img src="assets/img/icons/vec1.svg" alt=""/>
									</div>
									<h2> Our goal is making your <span> working </span> process faster
									     and <span> easier </span>. </h2>
									<div className="cont">
										<div className="lg-txt sub-font"> Devarif</div>
										<img src="assets/img/icons/arrow_lg.svg" alt="" className="arrow"/>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="progress-side wow fadeIn slow" data-wow-delay="0.4s">
									<div className="shap-img">
										<img src="assets/img/shap_img.png" alt=""/>
									</div>
									<div className="text fsz-16 cr-777 mt-40"> Our goal is to streamline your workflow,
									                                           making it faster and easier than ever
									                                           before. We aim to simplify complex tasks,
									                                           saving you time and effort. By leveraging
									                                           innovative tools and solutions, we
									                                           enhance productivity and efficiency. Our
									                                           focus is on reducing unnecessary steps
									                                           and automating repetitive processes. With
									                                           our support, you can achieve more in less
									                                           time. Let us help you transform the way
									                                           you work, so you can focus on what truly
									                                           matters.
									</div>
									<div className="progress-content pt-20">
										{[
											{title: "Web Design", percentage: 95},
											{title: "Web Development", percentage: 85},
											{title: "Seo", percentage: 85},
										].map((skill, index) => (
											<div className="progress-item mt-30" key={index}>
												<div
													className="progress"
													role="progressbar"
													aria-label={skill.title}
													aria-valuenow={skill.percentage}
													aria-valuemin="0"
													aria-valuemax="100"
												>
													<div
														className="progress-bar"
														style={{width: `${skill.percentage}%`}}
													></div>
												</div>

												<h6 className="fsz-16 fw-500 mt-30">
													{skill.title} {skill.percentage}%
												</h6>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</section>

		</>
	);
};

export default GoalSec;