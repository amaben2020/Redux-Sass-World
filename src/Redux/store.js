import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./PostReducer";

const reducer = combineReducers({
	post: postReducer,
});

const middleware = [thunk];
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
