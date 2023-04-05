import { PRODUCT_REQUESTED, SEARCH_PRODUCT_REQUESTED } from "../types"

export const getProducts = () => {
    return {
        type: PRODUCT_REQUESTED
    }
}

export const searchProducts = (query) => {
    return {
        type: SEARCH_PRODUCT_REQUESTED,
        payload: query
    }
}