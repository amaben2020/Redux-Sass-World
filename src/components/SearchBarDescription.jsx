import React from "react";

const SearchBarDescription = ({ text, color, fontStyle }) => {
	return (
		<div className="searchbar__description">
			<p style={{ fontStyle: `${fontStyle}`, color: `${color}` }}>{text}</p>
		</div>
	);
};

export default SearchBarDescription;
