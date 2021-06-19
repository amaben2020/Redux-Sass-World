import axios from "axios";
import React, { useEffect, useLayoutEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { fetchSingleProduct } from "../Redux/singleProduct/singleProductAction";
import "./../SASS/page/singleProduct.scss";
import "./../SASS/components/button.scss";
import Loading from "../components/messages/Loading";
import LoadingSmall from "../components/messages/LoadingSmall";
const ProductScreen = ({ match }) => {
	const dispatch = useDispatch();
	const { singleProduct, loading, error, success } = useSelector(
		(state) => state.product
	);
	const id = match.params.id;

	console.log(match);

	useEffect(() => {
		dispatch(fetchSingleProduct(id));
	}, [dispatch]);

	console.log(singleProduct);

	return (
		<div className="product">
			<Container>
				<Row>
					<Col lg={6} md={6}>
						{loading && <Loading />}
						<div className="singleProduct">
							<h1 className="singleProduct__header">
								{singleProduct?.title} - {singleProduct?.category}
							</h1>
							<img
								src={singleProduct?.image}
								className="singleProduct__image"
							/>
						</div>
					</Col>

					<Col lg={3} md={3}>
						<div className="singleProduct__description">
							{loading && <LoadingSmall />}
							<p>{singleProduct?.description}</p>{" "}
						</div>
					</Col>

					<Col lg={3} md={3}>
						<div className="singleProduct__bigcard">
							<h2> Cart Items </h2>
							price: ${singleProduct?.price}
							{loading && <LoadingSmall />}
							<button className="singleProduct__bigcard--button">
								{" "}
								Add To Cart
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

// export default ProductScreen;
export const MemoizedProductComponent = React.memo(ProductScreen);
