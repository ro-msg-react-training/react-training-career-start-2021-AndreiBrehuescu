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
}

const initialState: ProductsTableState = {
  products: [],
  isLoading: false,
};

export const ProductsTableReducer = (
  state = initialState,
  action: ProductsTableActionsInterface
): ProductsTableState => {
  switch (action.type) {
    case ProductsTableActionsEnum.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ProductsTableActionsEnum.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
