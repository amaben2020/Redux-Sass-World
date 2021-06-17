import "./SASS/style.scss";
import { Row, Col, Container, Button } from "react-bootstrap";
import Navbarr from "./components/Navbarr";
import "./SASS/style.scss";
import "./SASS/base/base.scss";
import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { postFetch } from "./Redux/PostActions";
import Card from "./components/Card";
import Layout from "./layout/Layout";
import ProductScreen from "./Screens/ProductScreen";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CartScreen from "./Screens/CartScreen";
import Home from "./Screens/Home";

function App() {
	return (
		<>
			{" "}
			<Navbarr />
			<Router>
				<Switch>
					<Layout>
						<Route exact path="/" component={Home} />
						<Route path="/product" component={ProductScreen} />
						<Route path="/cart" component={CartScreen} />
					</Layout>
				</Switch>
			</Router>
		</>
	);
}

export default App;
