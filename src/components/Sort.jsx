import { Dropdown } from "react-bootstrap";
import React from "react";

const Sort = () => {
	return (
		<div>
			<Dropdown size="lg">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Sort{" "}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Sort By Price</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Sort by Alphabet</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Sort by Category</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Sort;
