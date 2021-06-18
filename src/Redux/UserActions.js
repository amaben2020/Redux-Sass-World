import axios from "axios";
import {
	ADD_USER_ERROR,
	ADD_USER_LOADING,
	ADD_USER_SUCCESS,
	LOGIN_USER_SUCCESS,
} from "./constants/UserConstants";

export const addUser =
	(
		email,
		username,
		password,
		firstname,
		lastname,
		city,
		street,
		number,
		zipcode,
		lat,
		long,
		phone
	) =>
	async (dispatch) => {
		dispatch({ type: ADD_USER_LOADING });

		try {
			// await axios
			// 	.get(`https://fakestoreapi.com/users`)
			// 	.then((res) => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }));

			fetch("https://fakestoreapi.com/users", {
				method: "POST",
				body: JSON.stringify({
					email,
					username,
					password,
					name: {
						firstname,
						lastname,
					},
					address: {
						city,
						street,
						number,
						zipcode,
						geolocation: {
							lat,
							long,
						},
					},
					phone,
				}),
			})
				.then((res) => res.json())
				.then((json) => dispatch({ type: ADD_USER_SUCCESS, payload: json }));
		} catch (error) {
			dispatch({ type: ADD_USER_ERROR, payload: error });
		}
	};

export const loginUser = (username, password) => async (dispatch) => {
	dispatch({ type: ADD_USER_LOADING });

	try {
		fetch("https://fakestoreapi.com/auth/login", {
			method: "POST",
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((json) => dispatch({ type: LOGIN_USER_SUCCESS, payload: json }));
	} catch (error) {
		dispatch({ type: ADD_USER_ERROR, payload: error });
	}
};
