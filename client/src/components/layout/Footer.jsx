import React from 'react';
import {Link} from "react-router-dom";
import  logo from '/logo.png';
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="main-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<Link to="/" className="logo"> <img src="./assets/img/logo.png" alt=""/> </Link>
								<ul className="contact-links py-3">
									<li><a href="#" className="text-white fs-3"> +8801554422111 </a></li>
									<li><a href="#" className="text-white fs-3"> info.example@gmail.com </a></li>
								</ul>
							</div>
							<div className="col-lg-8">
								<div className="row">
									<div className="col">
										<div className="links-group mt-5 mt-lg-0">
											<h6 className="fsz-18 mb-30"> Top Links </h6>
											<ul className="links text-white">
												<li><Link to="/blog"> Blog </Link></li>
												<li><Link to="/service"> SEO Agency </Link></li>
												<li><Link to="/contact"> Company Report </Link></li>
												<li><Link to="/contact"> Marketing </Link></li>
											</ul>
										</div>
									</div>
									<div className="col">
										<div className="links-group mt-5 mt-lg-0">
											<h6 className="fsz-18 mb-4"> More Service </h6>
											<ul className="links">
												<li><Link to="/about"> About us </Link></li>
												<li><Link to="/service"> Portfolio </Link></li>
												<li><Link to="/blog"> Privacy Policy </Link></li>
												<li><Link to="/contact"> Contact us </Link></li>
											</ul>
										</div>
									</div>
									<div className="col">
										<div className="links-group mt-5 mt-lg-0">
											<h6 className="fsz-18 mb-4"> Address </h6>
											<ul className="links">
												<li><p>Meherpur <br/>Meherpur Sadar, Khulna </p></li>
												<li><p className="opacity-100"> Bangladesh </p></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="links-wrapper">

						</div>
					</div>
				</div>
				<div className="foot">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<p className="fsz-16 cr-999"> Copyright: © 2025 by <Link to="/"  className="text-white"> DevArif </Link> All Rights Reserved. </p>
							</div>
							<div className="col-lg-6">
								<div className="foot-links text-lg-end mt-5 mt-lg-0">
									<Link to="/"> FAQ </Link>
									<Link to="/"> Careers </Link>
									<Link to="/contact"> Contact Us </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;