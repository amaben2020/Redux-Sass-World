import {
	FETCH_POST_ERROR,
	FETCH_POST_LOADING,
	FETCH_POST_SUCCESS,
} from "./constants/PostConstants";
import axios from "axios";

export const postFetch = () => async (dispatch) => {
	dispatch({ type: FETCH_POST_LOADING });

	try {
		dispatch({ type: FETCH_POST_LOADING });
		// const res = await axios.get("https://fakestoreapi.com/products");
		// dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });

		await axios
			.get("https://fakestoreapi.com/products")
			.then((res) => dispatch({ type: FETCH_POST_SUCCESS, payload: res.data }));
	} catch (error) {
		dispatch({ type: FETCH_POST_ERROR, payload: error });
	}
};
