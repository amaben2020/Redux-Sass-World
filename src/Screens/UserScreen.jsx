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
	const getUsers = () =>
		axios.get("https://fakestoreapi.com/users").then((res) => res.data);

	const { data: users, isLoading } = useQuery("users", getUsers);
	console.log(users);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container style={{ paddingTop: "50px" }} fluid className="section">
			{" "}
			<h1 className="section__header">Top users</h1>{" "}
			<Row>
				<Col lg={9} xs={12} md={8} className="section__card">
					{users?.map((user) => (
						<div key={user.id}>
							<p>{user.address}</p>
							<p>{user.street}</p> <p>{user.name.firstname}</p>{" "}
						</div>
					))}
				</Col>{" "}
				<Col className="section__sidebar" lg={3} xs={12} md={4}>
					{/* <SearchBar sort={users} /> */}
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
