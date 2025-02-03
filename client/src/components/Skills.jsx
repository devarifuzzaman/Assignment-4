import React from "react";

const Skills = () => {
	return (
		<section className="tc-skills-pr">
			<div className="section-content wow fadeIn slow" data-wow-delay="0.2s">
				<div className="container">
					<div className="title">
						<h6 className="fsz-16 fw-200 mb-40">
							<img
								src="/assets/img/icons/tit_ico.svg"
								alt="Title Icon 1"
								className="icon"
							/>
							<span className="txt mx-2">skills & experience</span>
							<img
								src="/assets/img/icons/tit_ico2.svg"
								alt="Title Icon 2"
								className="icon"
							/>
						</h6>
						<h2 className="fsz-80 text-uppercase">skills & experience</h2>
						<img src="/assets/img/vec3.svg" alt="Vector Decoration" className="vec3" />
					</div>
					<div className="row gx-5">
						<div className="col-lg-7">
							<div className="info mt-50">
								<div className="text fsz-16 cr-777 col-lg-5">
									Our goal is to streamline your workflow, making it faster and easier than ever before. We aim to simplify complex tasks, saving you time and effort.
								</div>
								<div className="lg-txt sub-font">
									<span>D</span>
									<span>E</span>
									<span>V</span>
									<span>a</span>
									<span>r</span>
									<span>i</span>
									<span>F</span>
								</div>
								<p className="text fsz-16 cr-777 col-lg-5 ms-lg-auto">
									Our goal is to streamline your workflow, making it faster and easier than ever before. We aim to simplify complex tasks, saving you time and effort.
								</p>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="progress-side mt-50">
								<div className="text fsz-16 cr-777">
									Our goal is to streamline your workflow, making it faster and easier than ever before. We aim to simplify complex tasks, saving you time and effort. By leveraging innovative tools and solutions, we enhance productivity and efficiency. Our focus is on reducing unnecessary steps and automating repetitive processes. With our support, you can achieve more in less time. Let us help you transform the way you work, so you can focus on what truly matters.
								</div>
								<div className="progress-content pt-20">
									{[
										{ title: "Web Design", percentage: 95 },
										{ title: "Web Development", percentage: 85 },
										{ title: "Seo", percentage: 85 },
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
													style={{ width: `${skill.percentage}%` }}
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
	);
};

export default Skills;
