import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Jewelry = () => {
	const getJewelry = () => {
		axios
			.get("https://fakestoreapi.com/products/category/jewelery")
			.then((res) => res.data);

		// fetch("https://fakestoreapi.com/products/category/jewelery")
		// 	.then((res) => res.json())
		// 	.then((json) => console.log(json));
	};
	const { data: jewelry, isLoading } = useQuery("jewelry", getJewelry);
	console.log(typeof jewelry);
	return (
		<div style={{ height: "200vh" }}>
			{jewelry?.map((j) => (
				<div key={j.id}>
					<p>{j.title}</p>
					<img src={j.image} />{" "}
				</div>
			))}

			{jewelry &&
				jewelry.map((jewelry) => {
					return <p>{jewelry.title}</p>;
				})}
		</div>
	);
};

export default Jewelry;
