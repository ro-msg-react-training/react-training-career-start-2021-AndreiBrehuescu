import { put, takeEvery } from "@redux-saga/core/effects";
import {
  addProductToCart,
  addProductToCartError,
  CartActionsEnum,
  CartActionsInterface,
} from "../actions/CartActions";

function* addProductToCartAsync(action: CartActionsInterface) {
  try {
    console.log(action);
    console.log("CartSAGA");
    yield put(addProductToCart(action.payload));
  } catch (err) {
    yield put(addProductToCartError());
  }
}

export function* watchAddProductToCartAsync() {
  yield takeEvery(
    CartActionsEnum.ADD_PRODUCT_TO_CART_REQUEST,
    addProductToCartAsync
  );
}
