import { CART_ITEM_LOADING } from "../constants/CartConstants";

export const cartAddAction = (id, products) => async (dispatch) => {
	dispatch({ type: CART_ITEM_LOADING });

	try {
		await fetch("https://fakestoreapi.com/carts", {
			method: "POST",
			body: JSON.stringify({
				userId: 5,
				date: 2020 - 02 - 03,
				products: [
					{ productId: 5, quantity: 1 },
					{ productId: 1, quantity: 5 },
				],
			}),
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	} catch (error) {}
};
