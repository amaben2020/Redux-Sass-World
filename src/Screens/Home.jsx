import React from "react";
import Card from "../components/Card";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { postFetch } from "../Redux/PostActions.js";
const Home = () => {
	const getPosts = () =>
		axios.get("http://localhost:3000/post").then((res) => res.data);

	const { data, isLoading } = useQuery("posts", getPosts);

	// const dispatch = useDispatch();
	// const post = useSelector((state) => state.post);
	// const { loading, error, posts } = post;
	// console.log("Almighty Redux data", posts);

	// React.useEffect(() => {
	// 	dispatch(postFetch());
	// }, [dispatch]);

	// if (loading) {
	// 	return (
	// 		<div>
	// 			{" "}
	// 			<p>Loading.....</p>
	// 		</div>
	// 	);
	// }

	// if (error) {
	// 	return <p>Ooooops......</p>;
	// }
	return (
		<Container style={{ paddingTop: "50px" }} fluid className="section">
			{" "}
			<h1 className="section__header">Top Products</h1>
			<Row>
				<Col lg={9} xs={12} md={8} className="section__card">
					{data && data.map((dt) => <p key={dt.author}>{dt.title}</p>)}

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Col>{" "}
				<Col className="section__sidebar" lg={3} xs={12} md={4}>
					{/* {posts.map((p) => (
						<p> {p.body}</p>
					))} */}
					<p> SEARCHBAR </p>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
