import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./PostReducer";
import { toggleReducer } from "./ToggleReducer";
import { singleProductReducer } from "./singleProduct/singleProductReducer";
import { addUserReducer } from "./UserReducer";

const reducer = combineReducers({
	post: postReducer,
	toggleFunction: toggleReducer,
	product: singleProductReducer,
	addUser: addUserReducer,
});

const middleware = [thunk];
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
