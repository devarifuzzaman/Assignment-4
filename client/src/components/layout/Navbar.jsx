import React, { useState } from 'react';
import logo from '/logo.png';
import {Link} from "react-router-dom";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const toggleNavbar = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light navbar-pr">
				<div className="container-fluid p-0">
					<Link to="/" className="logo th-60 px-4">
						<img src={logo} alt="Logo"/>
					</Link>
					<button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={isNavbarOpen} aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
					<div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
					     id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto d-block d-lg-none">
							<li className="nav-item">
								<Link className="nav-link" to="/">Homes</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/service">Service</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/blog">Blog</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact</Link>
							</li>

						</ul>
						<div className="nav-side ms-lg-auto">
							{/* Toggle the side menu with active class when open */}
							<span
								className={`d-none d-lg-inline-block side_menu_btn ${isMenuOpen ? "active" : ""}`}
								onClick={toggleMenu}>
                                <span className="txt"> menu </span>
                            </span>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
