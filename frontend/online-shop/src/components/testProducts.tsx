import { IconButton, ThemeProvider } from "@material-ui/core";
import { useStyles } from "../styles/tableStyles";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductService from "../services/ProductService";
import React from "react";

export interface ProductEntityProps {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  weight: number;
  imageUrl: string;
}

export const TableProducts = (props: ProductEntityProps) => {
  var productService = new ProductService();
  var result = productService.getProducts();

  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    result.then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);

  const classes = useStyles();
  const items = data.map((product) => (
    <tr className={classes.trStyle}>
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
