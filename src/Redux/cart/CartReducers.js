import {
	FETCH_POST_ERROR,
	FETCH_POST_LOADING,
	FETCH_POST_SUCCESS,
} from "./constants/PostConstants";

const initialState = {
	posts: [],
};
export const postReducer = (state = { initialState }, action = {}) => {
	switch (action.type) {
		case FETCH_POST_LOADING:
			return {
				...state,
				loading: true,
			};
		case FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				posts: action.payload,
			};
		case FETCH_POST_ERROR:
			return {
				loading: false,
				error: "There was an error",
			};

		default:
			return state;
	}
};
