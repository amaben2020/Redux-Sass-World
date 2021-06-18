import {
	FETCH_SINGLE_PRODUCT_ERROR,
	FETCH_SINGLE_PRODUCT_LOADING,
	FETCH_SINGLE_PRODUCT_SUCCESS,
} from "../constants/SingleProduct";

const initialState = {
	singleProduct: [],
	// loading: false,
	// success: false,
};

export const singleProductReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_SINGLE_PRODUCT_LOADING:
			return {
				loading: true,
			};

		case FETCH_SINGLE_PRODUCT_SUCCESS:
			return {
				loading: false,
				singleProduct: action.payload,
				success: true,
			};

		case FETCH_SINGLE_PRODUCT_ERROR:
			return {
				loading: false,

				error: action.payload,
			};

		default:
			return state;
	}
};
