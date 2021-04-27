import { Product } from "../interfaces/ProductInterfaces";

export enum ProductsTableActionsEnum {
  GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST",
  GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS",
  GET_ALL_PRODUCTS_ERROR = "GET_ALL_PRODUCTS_ERROR",
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR",
}

export interface ProductsTableActionsInterface {
  type: string;
  payload: Product[];
}

export const getAllProductsRequest = () => {
  return {
    type: "GET_ALL_PRODUCTS_REQUEST",
  };
};

export const getAllProductsSuccess = (products: Product[]) => {
  return {
    type: "GET_ALL_PRODUCTS_SUCCESS",
    payload: products,
  };
};

export const getAllProductsError = () => {
  return {
    type: "GET_ALL_PRODUCTS_ERROR",
  };
};

export const addProductToCart = (product: Product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: product,
  };
};

export const addProductToCartError = () => {
  return {
    type: "ADD_PRODUCT_TO_CART_ERROR",
  };
};
