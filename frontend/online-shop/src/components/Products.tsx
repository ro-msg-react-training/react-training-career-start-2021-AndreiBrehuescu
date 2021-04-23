import { IconButton, ThemeProvider } from "@material-ui/core";
import { useStyles } from "../styles/tableStyles";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { ProductsTable } from "../reducers/ProductsTableReducer";
import { Product } from "../interfaces/ProductInterfaces";
import { getProducts } from "../actions/ProductsTableAction";

export interface ProductEntityProps {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  weight: number;
  imageUrl: string;
}

interface ProductsTableProps {
  products: Product[];
}

const mapStateToProps = (state: ProductsTable) => {
  return { products: state.products };
};

export const TableProducts = (props: ProductsTableProps) => {
  // const [data, setData] = React.useState<any[]>([]);

  // React.useEffect(() => {
  //   productService.getProducts().then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  const dispatch = useDispatch();

  dispatch(getProducts());

  console.log(props);

  const classes = useStyles();
  const items = props.products.map((product) => (
    <tr className={classes.trStyle}>
      <td className={classes.thtdStyle}>{product.category.name}</td>
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

export default connect(mapStateToProps)(TableProducts);
