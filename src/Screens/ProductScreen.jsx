import axios from "axios";
import React, { useEffect, useLayoutEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { fetchSingleProduct } from "../Redux/singleProduct/singleProductAction";
import "./../SASS/page/singleProduct.scss";
import "./../SASS/components/button.scss";
import { Spinner } from "react-bootstrap";
import Loading from "../components/messages/Loading";
const ProductScreen = ({ match }) => {
	const dispatch = useDispatch();
	const { singleProduct, loading, error, success } = useSelector(
		(state) => state.product
	);
	const id = match.params.id;

	console.log(match);

	useEffect(() => {
		let isFetched = true;
		if (loading) {
			return <p>Loading ....</p>;
		} else if (isFetched && !success) {
			dispatch(fetchSingleProduct(id));
		}
		// dispatch(fetchSingleProduct(id));
		localStorage.setItem("product", JSON.stringify(singleProduct));
	});
	console.log(singleProduct);

	useEffect(() => {
		localStorage.getItem("product", JSON.stringify(singleProduct));
	});

	// const fetchProduct = () => {
	// 	const id = match.params.id;
	// 	fetch(`https://fakestoreapi.com/products`)
	// 		.then((res) => res.json())
	// 		.then((json) => json);
	// };

	// const fetchProduct = () => {
	// 	const id = match.params.id;
	// 	return axios
	// 		.get(`https://fakestoreapi.com/products/${id}`)
	// 		.then((res) => res.data);
	// };

	// const { data, isLoading, isError } = useQuery("product", fetchProduct);

	// if (isLoading) {
	// 	return <Loading />;
	// }

	// if (isError) {
	// 	return <p>Loading ....</p>;
	// }

	// console.log(data);

	return (
		<div className="product">
			<Container>
				{singleProduct.title}
				{/* <Row>
					<Col lg={6} md={6}>
						<div className="singleProduct">
							<h1 className="singleProduct__header">
								{data.title} - {data.category}
							</h1>
							<img src={data.image} className="singleProduct__image" />
						</div>
					</Col>

					<Col lg={3} md={3}>
						<div className="singleProduct__description">
							<p>{data.description}</p>{" "}
						</div>
					</Col>

					<Col lg={3} md={3}>
						<div className="singleProduct__bigcard">
							<h2> Cart Items </h2>
							price: ${data.price}
							<button className="singleProduct__bigcard--button">
								{" "}
								Add To Cart
							</button>
						</div>
					</Col>
				</Row> */}
			</Container>
		</div>
	);
};

// export default ProductScreen;
export const MemoizedProductComponent = React.memo(ProductScreen);
