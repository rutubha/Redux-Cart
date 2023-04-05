import { ADD_TO_CART_SUCCESS, EMPTY_CART_SUCCESS, REMOVE_FROM_CART_SUCCESS } from "../types"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART_SUCCESS,
        payload: id
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART_SUCCESS
    }
}