import React from "react";

const Header = (props) => {
	return (
		<header>
			<div>
				<h1>{props.title}</h1>
			</div>
		</header>
	);
};

export default Header;
