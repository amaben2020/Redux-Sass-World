import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./../images/nvidia1070.jpg";
import "./../SASS/page/hero.scss";
import ReactPaginate from "react-paginate";
const Hero = () => {
	/// PAGINATION LOGIC VERY EASY
	//The pagination state
	const [pageNumber, setPageNumber] = React.useState(0);

	//The pagination state appointmentData per page
	const appointmentDataPerPage = 4;

	// i.e 0 * 5; how many list items to display
	const pagesVisited = pageNumber * appointmentDataPerPage;
	return (
		<div className="hero">
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={image1} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={image1} alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={image1} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Hero;
