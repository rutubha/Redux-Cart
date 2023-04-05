import { call, put, takeEvery } from "redux-saga/effects";
import {
    PRODUCT_FAILED,
    PRODUCT_REQUESTED,
    PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILED,
    SEARCH_PRODUCT_REQUESTED,
    SEARCH_PRODUCT_SUCCESS
} from "../types";

function getProducts() {
    let api = `https://dummyjson.com/products?select=title,price,thumbnail,category,brand`
    return fetch(api, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => { throw error });
}

function* fetchProducts(action) {
    try {
        const data = yield call(getProducts);
        yield put({ type: PRODUCT_SUCCESS, payload: data.products });
    } catch (error) {
        yield put({ type: PRODUCT_FAILED, payload: error.message });
    }
}

function* searchProducts(action) {
    try {
        const api = `https://dummyjson.com/products/search?q=${action.payload}&select=title,price,thumbnail,category,brand`
        const data = yield fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const products = yield data.json();

        yield put({ type: SEARCH_PRODUCT_SUCCESS, payload: products.products });
    } catch (error) {
        yield put({ type: SEARCH_PRODUCT_FAILED, payload: error.message })
    }
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_REQUESTED, fetchProducts);
    yield takeEvery(SEARCH_PRODUCT_REQUESTED, searchProducts);
}