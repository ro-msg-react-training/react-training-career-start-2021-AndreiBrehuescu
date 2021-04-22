import { ProductEntityProps } from "./testProducts";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../styles/tableStyles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton, ThemeProvider } from "@material-ui/core";

interface ProductDetailsProps {
  product: ProductEntityProps;
}

const ProductDetails = (props: any) => {
  const product = props.location.state.product;
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid item>
            <Paper> </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Nume : {product.name}</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              Categorie : {product.productCategoryDto.name}
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Pret : {product.price}</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Greutate : {product.weight}</Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid>
            <Paper className={classes.paper}>
              <IconButton className={classes.buttonStyle}>
                <AddShoppingCartIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.imageStyle}>
              <img src={product.imageUrl} width="200" height="200" />
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>{product.description}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
