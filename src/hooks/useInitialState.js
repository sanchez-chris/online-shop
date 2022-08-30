import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,  //keep the state (the things in the cart)
			cart: [...state.cart, payload] //keep the state (the things in the cart) and add a new thing (payload)
		});
	};

	const removeFromCart = (indexValue) => {
		setState({
			...state,
			cart: state.cart.filter((product,index) => index !== indexValue),
		})
	}

	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;