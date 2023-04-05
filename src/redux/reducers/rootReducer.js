import { combineReducers } from "redux";
import items from "./itemsReducer";
import products from "./productReducer";

const rootReducer = combineReducers({
    items: items,
    products: products
});

export default rootReducer;