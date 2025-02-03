import React from 'react';

const Clients = () => {
	return (
		<>
			<section className="tc-clients-pr">
				<div className="container">
					<div className="cards wow fadeIn slow" data-wow-delay="0.2s">
						<div className="row gx-0 justify-content-between">
							<div className="col-lg-7">
								<div className="row">
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/1.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/2.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/3.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/4.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/5.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-4 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/6.svg" alt=""/>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="float-txt"> Top Clients</div>
								<div className="row">
									<div className="col-lg-6 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/3.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-6 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/4.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-6 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/5.svg" alt=""/>
										</a>
									</div>
									<div className="col-lg-6 col-6">
										<a href="#" className="item">
											<img src="assets/img/clients/6.svg" alt=""/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<img src="assets/img/cl_line.png" alt="" className="cl-line"/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Clients;