import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductsTableReducer } from "./ProductsTableReducer";

export default combineReducers({
  products: ProductsTableReducer,
  cart: CartReducer,
});
