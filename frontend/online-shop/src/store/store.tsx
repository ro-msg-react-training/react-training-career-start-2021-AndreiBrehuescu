import { createStore } from "redux";
import { ProductsTableReducer } from "../reducers/ProductsTableReducer";

export const store = createStore(ProductsTableReducer);
