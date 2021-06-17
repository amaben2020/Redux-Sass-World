import {
	FETCH_POST_ERROR,
	FETCH_POST_LOADING,
	FETCH_POST_SUCCESS,
} from "./constants/PostConstants";
import axios from "axios";

export const postFetch = () => async (dispatch) => {
	dispatch({ type: FETCH_POST_LOADING });

	try {
		const res = await axios.get("http://localhost:3000/comments");
		dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });

		// const { data } = await axios
		// 	.get("http://localhost:4000/comments")
		// 	.then((res) => res.data);
		// dispatch({ type: FETCH_POST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: FETCH_POST_ERROR, payload: error });
	}
};
