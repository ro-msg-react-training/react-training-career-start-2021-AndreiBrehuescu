import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  ProductsTableReducer,
  ProductsTableState,
} from "../reducers/ProductsTableReducer";
import { watchGetAllProductsAsync } from "../sagas/TableProductsSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  ProductsTableReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGetAllProductsAsync);

export interface AppState {
  products: ProductsTableState;
}
