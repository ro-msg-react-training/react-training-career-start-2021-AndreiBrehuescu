import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateProductById } from "../services/ProductService";
import { useStyles } from "../styles/tableStyles";

const UpdateProduct = (props: any) => {
  const product = props.location.state.product;
  const classes = useStyles();

  const handleSaveClick = () => {
    updateProductById(product.id, product);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          defaultValue={product.name}
          onChange={(event) => (product.name = event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          defaultValue={product.price}
          onChange={(event) => (product.price = event.target.value)}
        />
      </form>
      <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
        <Button variant="contained" color="default">
          Cancel
        </Button>
      </Link>
      <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Link>
    </div>
  );
};

export default UpdateProduct;
