import { TOGGLE_CLOSE, TOGGLE_OPEN } from "./constants/PostConstants";

export const toggleFn = (dispatch) => {
	dispatch({ type: TOGGLE_OPEN, payload: true });

	dispatch({ type: TOGGLE_CLOSE, payload: false });
};
