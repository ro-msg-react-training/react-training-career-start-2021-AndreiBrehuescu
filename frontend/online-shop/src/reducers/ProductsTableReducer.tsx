import React from "react";
import {
  ProductsTableActions,
  ProductsTableActionsInterface,
} from "../actions/ProductsTableAction";
import Products from "../components/Products";
import { Product } from "../interfaces/ProductInterfaces";
import { getProducts } from "../services/ProductService";

export interface ProductsTable {
  products: Product[];
}

const InitialState: ProductsTable = {
  products: [],
};

export const ProductsTableReducer = (
  state = InitialState,
  action: ProductsTableActionsInterface
): ProductsTable => {
  switch (action.type) {
    case ProductsTableActions.GET_PRODUCTS:
      let produse = getProducts().then((result) => {
        let prod: ProductsTable = {
          products: result.data,
        };
        return prod;
      });
      return state;

    default:
      return state;
  }
};
