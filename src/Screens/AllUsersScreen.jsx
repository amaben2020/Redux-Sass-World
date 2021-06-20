import { data } from "jquery";
import React from "react";
import { Container, Col, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../Redux/UserActions";
import "./../SASS/components/admin-table.scss";
const AllUsersScreen = () => {
	const dispatch = useDispatch();
	const getUsers = useSelector((state) => state.getUsers);
	const { users, loading, error } = getUsers;
	console.log(users);

	React.useEffect(() => {
		dispatch(getUserAction());
	}, [dispatch]);

	return (
		<div>
			<Container fluid>
				<Col className="admin-table">
					<h2 className="admin-table__heading">All Users</h2>
					<Table responsive striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Username</th>
								<th>Geolocation (Lat)</th>
								<th>Geolocation (Long)</th>
								<th>Phone No</th>
								<th>Username</th>
							</tr>
						</thead>
						<tbody>
							{users &&
								users.map((user) => (
									<tr>
										<td>{user.id}</td>
										<td>{user.name.firstname}</td>
										<td>{user.name.lastname}</td>
										<td>{user.email}</td>
										<td>{user.address.geolocation.lat}</td>
										<td>{user.address.geolocation.long}</td>
										<td>{user.phone}</td>
										<td>{user.username}</td>
									</tr>
								))}
						</tbody>
					</Table>
				</Col>
			</Container>
		</div>
	);
};

export default AllUsersScreen;
