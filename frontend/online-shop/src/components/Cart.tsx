import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../actions/ProductsTableAction";
import { Product } from "../interfaces/ProductInterfaces";
import { AppState } from "../store/store";

export const AddToCart = (props: Product) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductToCart(props));
  }, []);

  console.log("ADD TO CART");
};
