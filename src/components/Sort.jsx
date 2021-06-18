import { Dropdown } from "react-bootstrap";
import React from "react";
import { useQuery } from "react-query";

const Sort = ({ sort }) => {
	const sortFunction = () => {
		fetch("https://fakestoreapi.com/products?sort=asc")
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	const { data, isLoading } = useQuery("sort", sortFunction);
	console.log(data);

	return (
		<div>
			<Dropdown size="lg">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Sort{" "}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => data} href="#/action-1">
						Sort By Price
					</Dropdown.Item>
					<Dropdown.Item onClick={() => sort} href="#/action-2">
						Sort by Alphabet
					</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Sort by Category</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Sort;
