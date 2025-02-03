import React from 'react';
import {Link} from "react-router-dom";
import  logo from '/logo.png';
const Footer = () => {
	return (
		<>
			<footer className="tc-footer-st1">
				<div className="main-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<Link to="/" className="logo"> <img src="./assets/img/logo.png" alt=""/> </Link>
							</div>
							<div className="col-lg-8">
								<h5 className="fsz-30 text-capitalize mb-30"> Subscribe Now. </h5>
								<div className="form-group">
									<label htmlFor="" className="fsz-18 mb-10"> Your Mail </label>
									<input type="text" className="form-control" placeholder="infoflex@info.com"/>
									<button><img src="./assets/img/arrow_wh.svg" alt=""/></button>
								</div>
							</div>
						</div>
						<div className="links-wrapper">
							<div className="row">
								<div className="col-lg-5">
									<ul className="contact-links">
										<li><a href="#"> +555 4422 111 00 </a></li>
										<li><a href="#"> info.artech@gmail.com </a></li>
									</ul>
								</div>
								<div className="col-lg-2">
									<div className="links-group mt-5 mt-lg-0">
										<h6 className="fsz-18 mb-30"> Top Links </h6>
										<ul className="links">
											<li><Link to="/"> Corporate Business </Link></li>
											<li><Link to="/"> SEO Agency </Link></li>
											<li><Link to="/"> Company Report </Link></li>
											<li><Link to="/"> Marketing </Link></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-2">
									<div className="links-group mt-5 mt-lg-0">
										<h6 className="fsz-18 mb-4"> More Service </h6>
										<ul className="links">
											<li><Link to="/about"> About us </Link></li>
											<li><Link to="/service"> Case Studies </Link></li>
											<li><Link to="/"> Privacy Policy </Link></li>
											<li><Link to="/contact"> Contact us </Link></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-3">
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
					<div className="lg-txt sub-font"> agency</div>
					<img src="./assets/img/foot_shaps.png" alt="" className="foot-shapes"/>
					<img src="./assets/img/fav_line.png" alt="" className="fav-line"/>
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