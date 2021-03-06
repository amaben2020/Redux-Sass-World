import React from "react";
import "./../SASS/components/searchbar.scss";
import SearchBarDescription from "./SearchBarDescription";
import Sort from "./Sort";
import { BsSearch } from "react-icons/bs";
const SearchBar = ({
	sort,
	query,
	onQueryChange,
	orderBy,
	sortBy,
	onSortByChange,
	onOrderByChange,
	sortItemsBy,
}) => {
	return (
		<>
			<div className="searchbar">
				<form>
					<input
						value={query}
						onChange={(e) => onQueryChange(e.target.value)}
						className="searchbar__input"
						type="search"
						placeholder="search products"
					/>
				</form>

				<div className="searchbar__icon">
					<BsSearch />
				</div>
			</div>
			<SearchBarDescription
				color="black"
				fontStyle="italic"
				text="Search and filter based on your needs ..."
			/>
			<Sort
				orderBy={orderBy}
				onSortByChange={onSortByChange}
				onOrderByChange={onOrderByChange}
				sortBy={sortBy}
				sortItemsBy={sortItemsBy}
			/>
		</>
	);
};

export default SearchBar;
