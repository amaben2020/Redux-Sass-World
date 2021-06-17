import React from "react";
import "./../SASS/components/searchbar.scss";
import SearchBarDescription from "./SearchBarDescription";
import Sort from "./Sort";
const SearchBar = () => {
	return (
		<div className="searchbar">
			<form>
				<input
					className="searchbar__input"
					type="search"
					placeholder="search products"
				/>
			</form>
			<SearchBarDescription
				color="black"
				fontStyle="italic"
				text="Search and filter based on your needs ..."
			/>
			<Sort />
		</div>
	);
};

export default SearchBar;
