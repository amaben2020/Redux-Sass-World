import React, { useState } from "react";
import Card from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "../Redux/PostActions.js";
import Loading from "./../components/messages/Loading";
import SearchBar from "./../components/SearchBar";
import Hero from "../components/Hero";
const Home = () => {
	const [query, setQuery] = useState("");
	const [sortBy, setSortBy] = useState("asc");
	const [orderBy, setOrderBy] = useState("price");

	const getPosts = () =>
		axios.get("https://fakestoreapi.com/products").then((res) => res.data);

	const { data: products, isLoading } = useQuery("posts", getPosts);
	console.log(typeof products);

	if (isLoading) {
		return <Loading />;
	}

	// React.useEffect(() => {
	// 	const filteredProductDataFunction = () => {
	// 		const filteredProductData = Object.entries(products).filter(
	// 			([key, product]) => {
	// 				return product.title.toLowerCase().includes(query.toLowerCase());
	// 			}
	// 		);
	// 	};
	// }, []);

	const filteredProductData = Object.values(products)
		.filter((product) => {
			return (
				product.category.toLowerCase().includes(query.toLowerCase()) ||
				product.title.toLowerCase().includes(query.toLowerCase())
			);
		})
		.sort((a, b) => {
			//order is a variable that ordersBy higher first value
			let order = orderBy === "asc" ? 1 : -1;
			console.log(order);
			console.log(sortBy);
			return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
		});

	console.log(filteredProductData);

	return (
		<Container style={{ paddingTop: "50px" }} fluid className="section">
			{/* <Row>
				<Col lg={12}>
					<Hero />
				</Col>
			</Row>  */}
			<h1 className="section__header">Top Products</h1>{" "}
			<Row>
				<Col lg={9} xs={12} md={8} className="section__card">
					{filteredProductData &&
						filteredProductData.map((product) => (
							<Card key={product.id} products={product} />
						))}
				</Col>{" "}
				<Col className="section__sidebar" lg={3} xs={12} md={4}>
					<SearchBar
						orderBy={orderBy}
						onSortByChange={(mySort) => setSortBy(mySort)}
						onOrderByChange={(mySort) => setOrderBy(mySort)}
						sortBy={sortBy}
						sort={products}
						query={query}
						onQueryChange={(myQuery) => setQuery(myQuery)}
					/>
					{filteredProductData &&
						filteredProductData.map((product) => (
							// <Card key={product.id} products={product} />
							<div>
								<p>{product.title}</p>
								<img src={product.image} />
							</div>
						))}
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
