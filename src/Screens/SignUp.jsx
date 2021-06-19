import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import Button from "../components/Button";
import "./../SASS/components/button.scss";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction } from "./../Redux/UserActions";

const SignUp = ({ match }) => {
	const addUser = useSelector((state) => state.addUser);
	const { user, loading, success, error } = addUser;
	const dispatch = useDispatch();
	// id: Number(match.params.id),
	const data = {
		id: 1,
		email: "",
		username: "",
		password: "",
		name: {
			firstname: "",
			lastname: "",
		},

		address: {
			city: "",
			street: "",
			number: "",
			zipcode: "",
			geolocation: {
				lat: "",
				long: "",
			},
		},
		phone: "",
	};

	const [formData, setFormData] = useState(data);
	console.log(formData);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(addUserAction(formData));
	};

	return (
		<div>
			<Container fluid>
				<Row className="justify-content-md-center">
					<Col md={6} lg={6} xs={12}>
						<Form onSubmit={formSubmitHandler}>
							<Form.Group
								onChange={(e) => {
									setFormData({ ...formData, email: e.target.value });
								}}
								value={formData.email}
								controlId="formBasicEmail"
							>
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group
								value={formData.username}
								onChange={(e) => {
									setFormData({ ...formData, username: e.target.value });
								}}
								controlId="username"
							>
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" placeholder="Enter Username" />
							</Form.Group>

							<Form.Group
								value={formData.password}
								onChange={(e) => {
									setFormData({ ...formData, password: e.target.value });
								}}
								controlId="password"
							>
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>

							<Form.Group
								value={formData.name.firstname}
								onChange={(e) => {
									setFormData({ ...formData, firstname: e.target.value });
								}}
								controlId="firstname"
							>
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="First name" />
							</Form.Group>

							<Form.Group
								value={formData.name.lastname}
								onChange={(e) => {
									setFormData({ ...formData, lastname: e.target.value });
								}}
								controlId="lastname"
							>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Last name" />
							</Form.Group>

							<Form.Group
								value={formData.address.city}
								onChange={(e) => {
									setFormData({ ...formData, city: e.target.value });
								}}
								controlId="city"
							>
								<Form.Label>City</Form.Label>
								<Form.Control type="text" placeholder=" Enter City" />
							</Form.Group>

							<Form.Group
								value={formData.address.street}
								onChange={(e) => {
									setFormData({ ...formData, street: e.target.value });
								}}
								controlId="street"
							>
								<Form.Label>City</Form.Label>
								<Form.Control type="street" placeholder=" Enter Street" />
							</Form.Group>

							<Form.Group
								value={formData.address.number}
								onChange={(e) => {
									setFormData({ ...formData, number: e.target.value });
								}}
								controlId="number"
							>
								<Form.Label> Number</Form.Label>
								<Form.Control type="number" placeholder="Enter Home number" />
							</Form.Group>

							<Form.Group
								value={formData.address.zipcode}
								onChange={(e) => {
									setFormData({ ...formData, zipcode: e.target.value });
								}}
								controlId="zipcode"
							>
								<Form.Label> Zipcode</Form.Label>
								<Form.Control type="zipcode" placeholder="Enter Zipcode" />
							</Form.Group>

							<Form.Group
								value={formData.address.geolocation.lat}
								onChange={(e) => {
									setFormData({ ...formData, lat: e.target.value });
								}}
								controlId="lat"
							>
								<Form.Label> lat</Form.Label>
								<Form.Control type="lat" placeholder="Enter lat" />
							</Form.Group>

							<Form.Group
								value={formData.address.geolocation.long}
								onChange={(e) => {
									setFormData({ ...formData, long: e.target.value });
								}}
								controlId="long"
							>
								<Form.Label> long</Form.Label>
								<Form.Control type="long" placeholder="Enter long" />
							</Form.Group>

							<Form.Group
								value={formData.phone}
								onChange={(e) => {
									setFormData({ ...formData, phone: e.target.value });
								}}
								controlId="phone"
							>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="number" placeholder="Enter phone number" />
							</Form.Group>

							<Button text="Submit" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignUp;
