import { Product } from "../interfaces/ProductInterfaces";

export enum CartActionsEnum {
  ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST",
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR",
}

export interface CartActionsInterface {
  type: string;
  payload: Product;
}

export const addProductToCartRequest = (product: Product) => {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: product,
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
