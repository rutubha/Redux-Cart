import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store