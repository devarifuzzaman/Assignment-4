import React from "react";
import Sidenav from "./sidenav.jsx";
import Header from "./Header.jsx";

const MasterLayout = ({ children, title }) => {
	return (
		<div>
			<Sidenav>
				<Header title={title} /> {/* Pass title to Header */}
				{children}
			</Sidenav>
		</div>
	);
};

export default MasterLayout;
