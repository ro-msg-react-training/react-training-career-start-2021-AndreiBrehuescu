import React from "react";
import {
  ProductsTableActionsEnum,
  ProductsTableActionsInterface,
} from "../actions/ProductsTableAction";

import { Product } from "../interfaces/ProductInterfaces";
import { deleteProductById, getProducts } from "../services/ProductService";

export interface ProductsTableState {
  products: Product[];
  isLoading: boolean;
  cart: Product[];
}

const initialState: ProductsTableState = {
  products: [],
  isLoading: false,
  cart: [],
};

export const ProductsTableReducer = (
  state = initialState,
  action: ProductsTableActionsInterface
): ProductsTableState => {
  switch (action.type) {
    case ProductsTableActionsEnum.GET_ALL_PRODUCTS_REQUEST:
      // CONSOLE LOG
      console.log("Request in REDUCER");
      return {
        ...state,
        isLoading: true,
      };
    case ProductsTableActionsEnum.GET_ALL_PRODUCTS_SUCCESS:
      console.log("Success in reducer");
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
