import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { useQuery } from "react-query";
import SortDropdown from "./SortDropdown";
import { Button } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
const Sort = ({
	sort,
	orderBy,
	onSortByChange,
	onOrderByChange,
	sortBy,
	sortItemsBy,
}) => {
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<Button
				style={{ padding: "1rem 1.7rem", background: "#000" }}
				onClick={toggleHandler}
				onMouseOver={toggleHandler}
				variant="secondary"
			>
				<span style={{ marginRight: "0.4rem" }}> SORT BY PRICE </span>{" "}
				<AiFillCaretDown />
			</Button>

			{toggle && (
				<SortDropdown
					orderBy={orderBy}
					onSortByChange={onSortByChange}
					onOrderByChange={onOrderByChange}
					sortBy={sortBy}
					sortItemsBy={sortItemsBy}
				/>
			)}
		</div>
	);
};

export default Sort;
