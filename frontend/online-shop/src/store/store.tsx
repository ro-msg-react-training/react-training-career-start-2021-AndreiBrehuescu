import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { CartReducer, CartState } from "../reducers/CartReducer";
import {
  ProductsTableReducer,
  ProductsTableState,
} from "../reducers/ProductsTableReducer";
import { watchAddProductToCartAsync } from "../sagas/CartSaga";
import { watchGetAllProductsAsync } from "../sagas/TableProductsSaga";
import rootReducer from "../reducers/rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

function* rootSaga() {
  yield all([watchGetAllProductsAsync(), watchAddProductToCartAsync()]);
}

export interface AppState {
  products: ProductsTableState;
  cart: CartState;
}
