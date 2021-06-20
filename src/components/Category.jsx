import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Category = () => {
	const getCategory = () => {
		const { data } = axios
			.get("https://fakestoreapi.com/products/category")
			.then((res) => console.log(res.data));
		console.log(typeof data);
		// fetch("https://fakestoreapi.com/products/category/jewelery")
		// 	.then((res) => res.json())
		// 	.then((json) => console.log(json));
	};
	const { data: category, isLoading } = useQuery("category", getCategory);

	return (
		<div style={{ height: "200vh" }}>
			{category?.map((j) => (
				<div key={j.id}>
					<p>{j.title}</p>
					<img src={j.image} />{" "}
				</div>
			))}

			{/* {category &&
				category.map((category) => {
					return <p>{category.title}</p>;
				})} */}
		</div>
	);
};

export default Category;
