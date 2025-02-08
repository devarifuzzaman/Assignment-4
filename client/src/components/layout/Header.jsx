import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '/logo.png';
import Cookies from "js-cookie";

const Header = ({ isMenuOpen, toggleMenu }) => {
	const location = useLocation();
	const isLogin = Cookies.get("token");
	const isActive = (path) => (location.pathname === path ? "cr-orange1" : "");

	return (
		<>
			<div className={`side_overlay ${isMenuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
			<div className={`side_overlay2 ${isMenuOpen ? "show" : ""}`}></div>
			<div className="side_menu" style={isMenuOpen ? { zIndex: 999, visibility: "visible", opacity: 1 } : {}}>
				<div className="content">
					<div className="row align-items-center vh-100 ">
						<div className="col-lg-6">
							<div className="main_links">
								<ul>
									<li>
										<Link to="/"
										      className={`main_link ${isActive("/")}`}
										      style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}
										      onClick={toggleMenu}>
											Home
										</Link>
									</li>
									<li>
										<Link to="/about"
										      className={`main_link ${isActive("/about")}`}
										      style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
											About
										</Link>
									</li>
									<li>
										<Link to="/service"
										      className={`main_link ${isActive("/service")}`}
										      style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
											Services
										</Link>
									</li>
									<li>
										<Link to="/blog"
										      className={`main_link ${isActive("/blog")}`}
										      style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
											Blog
										</Link>
									</li>
									<li>
										<Link to="/contact"
										      className={`main_link ${isActive("/contact")}`}
										      style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
											Contact
										</Link>
									</li>
									{isLogin ? (
										<li>
											<Link to="/dashboard" className={`main_link ${isActive("/dashboard")}`} onClick={toggleMenu} style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
												Dashboard
											</Link>
										</li>
									):(
										<li>
										<Link to="/login" className={`main_link ${isActive("/login")}`} onClick={toggleMenu} style={isMenuOpen ? { translate: "none", rotate: "none", scale: "none", visibility: "visible", transform: "translate(0px, 0px)", opacity: 1 } : {}}>
									Login
								</Link>
							</li>

							)}

								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="menu-info justify-content-lg-center align-items-lg-center text-lg-center mt-5 mt-lg-0"
							     style={isMenuOpen ? { visibility: "visible", opacity: 1 } : { opacity: 0 }}>
								<div className="cont">
									<Link to="/" className="logo" onClick={toggleMenu}>
										<img src={logo} alt="Logo"/>
									</Link>
									<div className="social_links">
										<Link to="/"> <i className="fab fa-facebook-f"></i> </Link>
										<Link to="/"> <i className="fab fa-x-twitter"></i> </Link>
										<Link to="/"> <i className="fab fa-linkedin-in"></i> </Link>
										<Link to="/"> <i className="fab fa-instagram"></i> </Link>
									</div>
									<ul className="contact-links">
										<li><Link to="#"> <i className="fal fa-phone"></i> +00 123 456 7897 </Link></li>
										<li><Link to="#"> <i className="fal fa-envelope-open"></i> info@devarif.com </Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Close button */}
				<span className="clss" onClick={toggleMenu}> <i className="fal fa-times"></i> </span>
			</div>
		</>
	);
};

export default Header;
