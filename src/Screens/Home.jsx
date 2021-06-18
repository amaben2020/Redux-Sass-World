import React from "react";
import Card from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "../Redux/PostActions.js";
import Loading from "./../components/messages/Loading";
import SearchBar from "./../components/SearchBar";
const Home = () => {
	const getPosts = () =>
		axios.get("https://fakestoreapi.com/products").then((res) => res.data);

	const { data, isLoading } = useQuery("posts", getPosts);

	if (isLoading) {
		return <Loading />;
	}

	// const getPosts = () =>
	// 	axios
	// 		.get("https://fakestoreapi.com/products?sort=desc")
	// 		.then((res) => res.data);

	// const { data, isLoading } = useQuery("posts", getPosts);

	// if (isLoading) {
	// 	return <Loading />;
	// }

	return (
		<Container style={{ paddingTop: "50px" }} fluid className="section">
			{" "}
			<h1 className="section__header">Top Products</h1>{" "}
			<Row>
				<Col lg={9} xs={12} md={8} className="section__card">
					{data &&
						data.map((products) => (
							<Card key={products.id} products={products} />
						))}
				</Col>{" "}
				<Col className="section__sidebar" lg={3} xs={12} md={4}>
					<SearchBar sort={data} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
