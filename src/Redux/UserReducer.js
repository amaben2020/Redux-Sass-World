import {
	ADD_USER_ERROR,
	ADD_USER_LOADING,
	ADD_USER_SUCCESS,
} from "./constants/UserConstants";

const initialState = {
	user: [],
};

export const addUserReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case ADD_USER_LOADING:
			return {
				loading: true,
			};

		case ADD_USER_SUCCESS:
			return {
				loading: false,
				success: true,
				user: action.payload,
			};

		case ADD_USER_ERROR:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
