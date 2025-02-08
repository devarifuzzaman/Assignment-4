import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {UserLogout} from "../../../Api/ApiRoute.js";

const Sidenav = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();
	let logOutFunction = async () => {
		let result = await UserLogout();
		if (result === true) {
			// Navigate to the login page
			navigate("/");
		}
	};

	// Active class logic
	const isActive = (path) => (location.pathname === path ? "cr-orange1" : "");

	// State for managing dropdowns
	return (
		<div className="container-fluid p-0">
			<div className="sidebar p-3">
				<Link to="/" className={isActive("/")}>
					<img className="w-50" src="/logo.png" alt=""/>
				</Link>
				{/* Home Link */}
				<ul>
					<li><Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link></li>
					<li><Link to="/category" className={isActive("/category")}>Category</Link></li>
					<li><Link to="/dasblog" className={isActive("/dasblog")}>Blog</Link></li>
					<li><Link to="/dasservice" className={isActive("/dasservice")}>Service</Link></li>
					<li><Link to="/team" className={isActive("/team")}>Team</Link></li>
				</ul>

				<button onClick={logOutFunction} className="btn hover-orange1"><i className="fa fa-sign-out"></i> Logout</button>

			</div>

			<div className="content ps-5 pt-5 pb-5">
				{children}
			</div>
		</div>
	);
};

export default Sidenav;
