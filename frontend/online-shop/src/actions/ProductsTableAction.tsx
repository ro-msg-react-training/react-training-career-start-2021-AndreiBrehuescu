import { Product } from "../interfaces/ProductInterfaces";

export enum ProductsTableActionsEnum {
  GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST",
  GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS",
  GET_ALL_PRODUCTS_ERROR = "GET_ALL_PRODUCTS_ERROR",
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
