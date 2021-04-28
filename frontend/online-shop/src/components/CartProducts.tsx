import { Box, Button, Grid, IconButton } from "@material-ui/core";
import { useStyles } from "../styles/tableStyles";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { Product } from "../interfaces/ProductInterfaces";
import { AppState, store } from "../store/store";

import {
  addProductToCartRequest,
  addProductToCart,
} from "../actions/CartActions";

interface CartProductsProps {
  products: Product[];
  isLoading: boolean;
}

export const CartProducts = (props: CartProductsProps) => {
  const classes = useStyles();
  const items = store.getState().cart.products.map((product) => (
    <tr className={classes.trStyle} key={product.id}>
      <td className={classes.thtdStyle}>{product.productCategoryDto.name}</td>
      <td className={classes.thtdStyle}>{product.name}</td>
      <td className={classes.thtdStyle}>{product.price}</td>
      <td key={product.id}>
        <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
          <IconButton className={classes.buttonStyle}>
            <InfoIcon />
          </IconButton>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className={classes.root}>
      <table className={classes.tableStyle}>
        <thead className={classes.theadStyle}>
          <tr>
            <th className={classes.thtdStyle}>Category</th>
            <th className={classes.thtdStyle}>Name</th>
            <th className={classes.thtdStyle}>Price</th>
            <th className={classes.thtdStyle}>Description</th>
          </tr>
        </thead>
        <tbody className={classes.trStyle}>{items}</tbody>
      </table>
      <div className={classes.buttonCenter}>
        <Link to={{ pathname: `/checkout` }}>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  products: state.cart.products,
  isLoading: state.cart.isLoading,
});

export default connect(mapStateToProps, {
  addProductToCartRequest,
  addProductToCart,
})(CartProducts);
