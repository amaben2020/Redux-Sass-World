import { TOGGLE_CLOSE, TOGGLE_OPEN } from "./constants/PostConstants";

const initialState = {
	toggle: false,
};

export const toggleReducer = (state = initialState, action) => {
	switch (action.type) {
		// case TOGGLE_OPEN:
		// 	return {
		// 		...state,
		// 		toggle: action.payload,
		// 	};

		case TOGGLE_OPEN:
			return Object.assign({}, state, {
				cartOpen: !state.toggle,
			});

		case TOGGLE_CLOSE:
			return {
				...state,
				toggle: action.payload,
			};
		default:
			return state;
	}
};
