import React, { useState, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const MasterLayout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cursorInnerRef = useRef(null);
	const cursorOuterRef = useRef(null);

	useEffect(() => {
		const cursorInner = cursorInnerRef.current;
		const cursorOuter = cursorOuterRef.current;

		if (!cursorInner || !cursorOuter) return;
		cursorInner.style.visibility = "visible";
		cursorOuter.style.visibility = "visible";

		const handleMouseMove = (e) => {
			cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
			cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		};

		const handleMouseEnter = () => {
			cursorInner.classList.add("cursor-hover");
			cursorOuter.classList.add("cursor-hover");
		};

		const handleMouseLeave = () => {
			cursorInner.classList.remove("cursor-hover");
			cursorOuter.classList.remove("cursor-hover");
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className="mouse-cursor cursor-outer" ref={cursorOuterRef}></div>
			<div className="mouse-cursor cursor-inner" ref={cursorInnerRef}></div>

			<div className="bg-lines">
				<span></span> <span></span>
				<span></span> <span></span>
				<span></span>
				<span></span>
			</div>

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
