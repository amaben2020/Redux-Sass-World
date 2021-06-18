import axios from "axios";
import {
	FETCH_SINGLE_PRODUCT_ERROR,
	FETCH_SINGLE_PRODUCT_LOADING,
	FETCH_SINGLE_PRODUCT_SUCCESS,
} from "../constants/SingleProduct";

export const fetchSingleProduct = (id) => async (dispatch) => {
	dispatch({ type: FETCH_SINGLE_PRODUCT_LOADING });

	try {
		// await fetch(`https://fakestoreapi.com/products/${id}`)
		// 	.then((res) => res.json())
		// 	.then((json) =>
		// 		dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: json })
		// 	);

		await axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((res) =>
				dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: res.data })
			);
	} catch (error) {
		dispatch({ type: FETCH_SINGLE_PRODUCT_ERROR, payload: error });
	}
};
