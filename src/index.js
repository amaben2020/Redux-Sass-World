// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // import "./../src/_bootswatch.scss";
// // import "./../src/bootstrap.min.css";
// import { Provider } from "react-redux";
// import store from "./Redux/store";

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { persistStore, autoRehydrate } from "redux-persist";
// import "./../src/_bootswatch.scss";
// import "./../src/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
