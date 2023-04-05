import {
	ADD_TO_CART_REQUESTED,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILED,
	REMOVE_FROM_CART_REQUESTED,
	REMOVE_FROM_CART_FAILED,
	REMOVE_FROM_CART_SUCCESS,
	EMPTY_CART_SUCCESS
} from "../types";

const initialState = {
	loading: false,
	items: [],
	error: null
}

export default function items(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART_REQUESTED:
		case REMOVE_FROM_CART_REQUESTED:
			return {
				...state,
				loading: true
			}

		// Add item to cart
		case ADD_TO_CART_SUCCESS:
			const exists = state.items.some(item => item.id === action.payload.id);
			const items = exists ? [...state.items] : [...state.items, action.payload];
			return {
				...state,
				loading: false,
				items 
			}

		//Remove item from cart
		case REMOVE_FROM_CART_SUCCESS:
			let tempArray = [...state.items];
			tempArray = tempArray.filter(item => item.id !== action.payload)
			return {
				...state,
				loading: false,
				items: [...tempArray]
			}

		//Empty Cart
		case EMPTY_CART_SUCCESS:
			return {
				...state,
				loading: false,
				items: []
			}

		case ADD_TO_CART_FAILED:
		case REMOVE_FROM_CART_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		default:
			return state
	}
}