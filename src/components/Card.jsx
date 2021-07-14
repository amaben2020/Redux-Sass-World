import React from 'react';
import './../SASS/components/card.scss';
import image from './../images/alienware.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import axios from 'axios';
const Card = ({ products, match }) => {
	const id = products.id;

	return (
		<Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
			<div className='card'>
				<div className='card__holder'>
					<p className='card__holder--text'>{products.category}</p>
				</div>
				<img className='card__image' src={products.image} alt={image} />

				<div className='card__price'>
					<p className='card__price-title'>{products.title}...</p>
					<p className='card__price-1'>Price: </p>

					<p className='card__price-2'>${products.price}</p>
				</div>
				<div className='card__promo'>
					<p>Up to 50% off</p>
				</div>
				<Link to='/cart'>
					<Button
						color='black'
						large='large'
						name='Add To Cart'
						type='primary'
					/>
				</Link>
			</div>
		</Link>
	);
};

export default Card;
