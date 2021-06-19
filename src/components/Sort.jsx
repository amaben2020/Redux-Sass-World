import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { useQuery } from "react-query";
import SortDropdown from "./SortDropdown";
import { Button } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
const Sort = ({ sort, orderBy, onSortByChange, onOrderByChange, sortBy }) => {
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle(!toggle);
	};

	const sortFunction = () => {
		fetch("https://fakestoreapi.com/products?sort=asc")
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	const { data, isLoading } = useQuery("sort", sortFunction);
	console.log(data);

	return (
		<div>
			<Button
				style={{ padding: "1rem 1.7rem", background: "#000" }}
				onClick={toggleHandler}
				onMouseOver={toggleHandler}
				variant="secondary"
			>
				SORT <AiFillCaretDown />
			</Button>

			{toggle && (
				<SortDropdown
					orderBy={orderBy}
					onSortByChange={onSortByChange}
					onOrderByChange={onOrderByChange}
					sortBy={sortBy}
				/>
			)}
		</div>
	);
};

export default Sort;
