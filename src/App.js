import "./SASS/style.scss";

import Navbarr from "./components/Navbarr";
import "./SASS/style.scss";
import "./SASS/base/base.scss";

import React from "react";

import Layout from "./layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./Screens/ProductScreen.jsx";
import Home from "./Screens/Home";
import SignUp from "./Screens/SignUp";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbarr />{" "}
				<Switch>
					<Layout>
						<Route path="/" exact component={Home} />
						<Route path="/product" component={Product} />
						<Route path="/signup" component={SignUp} />
					</Layout>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
