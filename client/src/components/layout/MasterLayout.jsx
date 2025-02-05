import React, { useState, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const MasterLayout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>

				<div id="scrollsmoother-container"
				     style={isMenuOpen
					     ? {
						     transform: "scale(0.97, 0.97)",
						     opacity: 0.1,
					     }
					     : {
						     transform: "translate(0px, 0px)",
						     opacity: 1,
					     }
				     }
				>

					<Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
					{children}
				</div>

				<Footer/>
			</>
			);
			};

			export default MasterLayout;
