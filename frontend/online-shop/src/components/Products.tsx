import { Box, IconButton } from "@material-ui/core";
import { useStyles } from "../styles/tableStyles";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Product } from "../interfaces/ProductInterfaces";
import {
  getAllProductsRequest,
  getAllProductsSuccess,
} from "../actions/ProductsTableAction";
import { AppState, store } from "../store/store";
import { Dispatch } from "redux";
import React, { useEffect } from "react";

interface ProductsTableProps {
  products: Product[];
  isLoading: boolean;
}

export const TableProducts = (props: ProductsTableProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsRequest());
  }, []);

  // CONSOLE LOG

  console.log(store.getState().products);

  // CONSOLE LOG
  //console.log(props.products);

  const classes = useStyles();
  const items = store.getState().products.map((product) => (
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
  );
};

const mapStateToProps = (state: AppState) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllProd: () => dispatch(getAllProductsRequest()),
  getAllProdSuccess: (products: Product[]) =>
    dispatch(getAllProductsSuccess(products)),
});

export default connect(mapStateToProps, {
  getAllProductsRequest,
  getAllProductsSuccess,
})(TableProducts);
