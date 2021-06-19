import React from "react";
import { GrCheckmark } from "react-icons/gr";
import "./../SASS/components/sortdropdown.scss";
const SortDropdown = ({
	orderBy,
	onSortByChange,
	onOrderByChange,
	sortBy,
	onSortItemsByChange,
	sortItemsByChange,
}) => {
	return (
		<div className="sortDropdown">
			<ul className="sortDropdown__items">
				{/* <li
					className="sortDropdown__items--1"
					onClick={() => onSortByChange("title")}
				>
					{" "}
					<div
						className="sortDropdown__items--1"
						onClick={() => onSortByChange("title")}
					>
						<div className="sortDropdown__items--1--text">Sort By Title </div>
						<div className="sortDropdown__items--1--check">
							{orderBy === "title" && <GrCheckmark />}
						</div>
					</div>
				</li> */}

				<li
					className="sortDropdown__items--2"
					onClick={() => onOrderByChange("asc")}
				>
					{" "}
					<div className="sortDropdown__items--2">
						<div
							onClick={() => onOrderByChange("asc")}
							className="sortDropdown__items--2--text"
						>
							Asc <span>Low - High</span>
						</div>
						<div
							onClick={() => onOrderByChange("desc")}
							className="sortDropdown__items--2--check"
						>
							{sortBy === "asc" && <GrCheckmark />}
						</div>
					</div>
				</li>

				<li
					className="sortDropdown__items--3"
					onClick={() => onOrderByChange("desc")}
				>
					{" "}
					<div className="sortDropdown__items--3">
						<div className="sortDropdown__items--3--text">
							Desc <span>High - low</span>
						</div>
						<div
							className="sortDropdown__items--3--check"
							onClick={() => onOrderByChange("desc")}
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
