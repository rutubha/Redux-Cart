import { 
    PRODUCT_FAILED, 
    PRODUCT_REQUESTED, 
    PRODUCT_SUCCESS, 
    SEARCH_PRODUCT_FAILED, 
    SEARCH_PRODUCT_REQUESTED, 
    SEARCH_PRODUCT_SUCCESS 
} from "../types";

const initialState = {
    loading: false,
    products: [],
    error: null
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_REQUESTED:
        case SEARCH_PRODUCT_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case PRODUCT_SUCCESS:
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }

        case PRODUCT_FAILED:
        case SEARCH_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}