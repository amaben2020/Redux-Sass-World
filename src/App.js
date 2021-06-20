import "./SASS/style.scss";

import Navbarr from "./components/Navbarr";
import "./SASS/style.scss";
import "./SASS/base/base.scss";

import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MemoizedProductComponent } from "./Screens/ProductScreen.jsx";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";
import UserScreen from "./Screens/UserScreen.jsx";
import AllUsersScreen from "./Screens/AllUsersScreen";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbarr />{" "}
				<Switch>
					<Layout>
						<Route path="/" exact component={Home} />
						<Route path="/product/:id" component={MemoizedProductComponent} />
						<Route path="/signup" component={SignUp} />
						<Route path="/users" component={UserScreen} />
						<Route path="/allusers" component={AllUsersScreen} />
						<ReactQueryDevtools />
					</Layout>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
