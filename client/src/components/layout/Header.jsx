import React from 'react';
import { Link } from "react-router-dom";
import logo from '/logo.png';

const Header = ({ isMenuOpen, toggleMenu }) => {
	return (
		<>
			<div className={`side_overlay ${isMenuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
			<div className={`side_overlay2 ${isMenuOpen ? "show" : ""}`}></div>
			<div className="side_menu" style={isMenuOpen ? {zIndex: 999, visibility: "visible", opacity: 1,}: {}}>
				<div className="content">
					<div className="row">
						<div className="col-lg-6">
							<div className="main_links">
								<ul>
									<li><Link to="/" className="main_link" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1}: {}} onClick={toggleMenu}> Home </Link></li>
									<li><Link to="/about" className="main_link" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1}: {}}> About</Link></li>
									<li><Link to="/service" className="main_link" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1}: {}}> Services</Link></li>
									<li><Link to="/blog" className="main_link" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1}: {}}> Blog </Link></li>
									<li><Link to="/contact" className="main_link" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1}: {}}> Contact</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="menu-info justify-content-lg-center align-items-lg-center text-lg-center mt-5 mt-lg-0" style={isMenuOpen ? {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 1} : {translate: "none",rotate:"none",scale:"none",visibility: "visible",transform:"translate(0px, 0px)",opacity: 0} }>
								<div className="cont">
									<Link to="/" className="logo" onClick={toggleMenu}>
										<img src={logo} alt=""/>
									</Link>
									<div className="social_links">
										<Link to="/"> <i className="fab fa-facebook-f"></i> </Link>
										<Link to="/"> <i className="fab fa-x-twitter"></i> </Link>
										<Link to="/"> <i className="fab fa-linkedin-in"></i> </Link>
										<Link to="/"> <i className="fab fa-instagram"></i> </Link>
									</div>
									<ul className="contact-links">
										<li><Link to="#"> <i className="fal fa-phone"></i> +00 123 456 7897 </Link></li>
										<li><Link to="#"> <i className="fal fa-envelope-open"></i> info@devarif.com </Link>
										</li>
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
