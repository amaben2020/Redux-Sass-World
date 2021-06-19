import React from "react";
import { GrCheckmark } from "react-icons/gr";
import "./../SASS/components/sortdropdown.scss";
const SortDropdown = ({ orderBy, onSortByChange, onOrderByChange, sortBy }) => {
	return (
		<div className="sortDropdown">
			<ul className="sortDropdown__items">
				<li className="sortDropdown__items--1">
					{" "}
					<div
						className="sortDropdown__items--1"
						onClick={() => onOrderByChange("price")}
					>
						<div className="sortDropdown__items--1--text">Sort By Price </div>
						<div className="sortDropdown__items--1--check">
							{orderBy === "price" && <GrCheckmark />}
						</div>
					</div>
				</li>

				<li
					className="sortDropdown__items--2"
					onClick={() => onSortByChange("asc")}
				>
					{" "}
					<div className="sortDropdown__items--2">
						<div
							onClick={() => onSortByChange("asc")}
							className="sortDropdown__items--2--text"
						>
							Asc
						</div>
						<div
							onClick={() => onSortByChange("desc")}
							className="sortDropdown__items--2--check"
						>
							{sortBy === "asc" && <GrCheckmark />}
						</div>
					</div>
				</li>

				<li
					className="sortDropdown__items--3"
					onClick={() => onSortByChange("desc")}
				>
					{" "}
					<div className="sortDropdown__items--3">
						<div className="sortDropdown__items--3--text">Desc</div>
						<div
							className="sortDropdown__items--3--check"
							onClick={() => onSortByChange("desc")}
						>
							{sortBy === "desc" && <GrCheckmark />}
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SortDropdown;
