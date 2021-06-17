import React from "react";
import "./../SASS/components/card.scss";
import image from "./../images/alienware.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
const Card = () => {
	return (
		<Link to="/product">
			<div className="card">
				<div className="card__holder">
					<p className="card__holder--text">18% off</p>
				</div>
				<img className="card__image" src={image} />

				<div className="card__price">
					<p className="card__price-1">Price: </p>
					<p className="card__price-2">$200</p>
				</div>
				<div className="card__promo">
					<p>Up to 50% off</p>
				</div>
				<Link to="/cart">
					<Button color="black" large="large" name="Add To Cart" />
				</Link>
			</div>
		</Link>
	);
};

export default Card;
