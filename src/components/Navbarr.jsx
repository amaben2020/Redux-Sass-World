import React from "react";
import "./../SASS/components/navbar.scss";
const Navbarr = () => {
	return (
		<div className="navbar">
			<ul className="navbar__items">
				<li className="navbar__items-1">Home</li>
				<li className="navbar__items-2">About</li>
				<li className="navbar__items-3">Courses</li>
				<li className="navbar__items-4">Welcome</li>
			</ul>
		</div>
	);
};

export default Navbarr;
