import {
  getAllProductsError,
  getAllProductsRequest,
  getAllProductsSuccess,
  ProductsTableActionsEnum,
} from "../actions/ProductsTableAction";
import { Product } from "../interfaces/ProductInterfaces";
import { takeEvery, put, call } from "redux-saga/effects";
import { getProducts } from "../services/ProductService";

function* getAllProductsAsync() {
  try {
    const result: Product[] = yield call(() => getProducts());
    yield put(getAllProductsSuccess(result));
  } catch (err) {
    yield put(getAllProductsError());
  }
}

export function* watchGetAllProductsAsync() {
  yield takeEvery(
    ProductsTableActionsEnum.GET_ALL_PRODUCTS_REQUEST,
    getAllProductsAsync
  );
}
