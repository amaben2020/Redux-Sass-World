import DropDown from "./DropDown";
import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import "./../SASS/components/navbar.scss";
import { FaCartArrowDown } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "./../images/logo.png";
const Navbarr = () => {
	const [show, setShow] = React.useState(false);
	const showDropdown = () => {
		setShow(!show);
	};
	const hideDropdown = () => {
		setShow(false);
	};

	const [toggleCartDropdown, setToggleCartDropdown] = React.useState(false);

	const toggler = () => {
		return setToggleCartDropdown(!toggleCartDropdown);
	};

	return (
		<div className="navbar">
			<Link to="/">
				<div className="navbar__logo">
					<img className="navbar__logo-image" src={logoImg} alt="logo" />
					<p className="navbar__logo-text">Shop and enjoy....</p>
				</div>
			</Link>
			<ul className="navbar__items">
				<li className="navbar__items-1">Home</li>
				<li className="navbar__items-2">About</li>
				<li className="navbar__items-3">Courses</li>
				{/* <LinkContainer to="/signup">
					<Nav.Link style={{ color: "white" }} >
						Sign Up
					</Nav.Link>
				</LinkContainer> */}
				<li className="navbar__items-4">
					{" "}
					<Link
						style={{ color: "white", textDecoration: "none" }}
						className="navbar__items-4"
						to="/signup"
					>
						{" "}
						Sign Up{" "}
					</Link>{" "}
				</li>
				<NavDropdown
					style={{ color: "white" }}
					show={show}
					onMouseEnter={showDropdown}
					onMouseLeave={hideDropdown}
					title="Dropdown"
					id="basic-nav-dropdown"
				>
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				</NavDropdown>
			</ul>

			<FaCartArrowDown onClick={toggler} />
			{toggleCartDropdown && <DropDown />}
		</div>
	);
};

export default Navbarr;
