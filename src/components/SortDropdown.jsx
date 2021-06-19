import React from "react";
import { GrCheckmark } from "react-icons/gr";
import "./../SASS/components/sortdropdown.scss";
const SortDropdown = () => {
	return (
		<div className="sortDropdown">
			<ul className="sortDropdown__items">
				<li className="sortDropdown__items--1">
					{" "}
					<div className="sortDropdown__items--1">
						<div className="sortDropdown__items--1--text">Sort By Price </div>
						<div className="sortDropdown__items--1--check">
							<GrCheckmark />
						</div>
					</div>
				</li>

				<li className="sortDropdown__items--2">
					{" "}
					<div className="sortDropdown__items--2">
						<div className="sortDropdown__items--2--text">
							Sort By Alphabet{" "}
						</div>
						<div className="sortDropdown__items--2--check">
							<GrCheckmark />
						</div>
					</div>
				</li>

				<li className="sortDropdown__items--3">
					{" "}
					<div className="sortDropdown__items--3">
						<div className="sortDropdown__items--3--text">
							Sort By Category{" "}
						</div>
						<div className="sortDropdown__items--3--check">
							<GrCheckmark />
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SortDropdown;
