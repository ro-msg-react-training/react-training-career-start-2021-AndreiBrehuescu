import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../styles/tableStyles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";
import { deleteProductById, getProductById } from "../services/ProductService";
import UpdateIcon from "@material-ui/icons/Update";
import { useDispatch } from "react-redux";
import { Product } from "../interfaces/ProductInterfaces";
import {
  addProductToCart,
  addProductToCartRequest,
} from "../actions/CartActions";
import { useEffect, useState } from "react";

export const ProductDetails = (props: any) => {
  const id = (props as any).match.params.id;

  const classes = useStyles();
  const dispatch = useDispatch();

  const addToCart = (pro: Product) => {
    dispatch(addProductToCartRequest(pro));
  };

  const [prod, setProd] = useState({
    id: 0,
    name: "",
    description: "",
    imageUrl: "",
    price: 0.0,
    weight: 0.0,
    productCategoryDto: {
      id: 0,
      name: "",
      description: "",
    },
    supplierDto: {
      id: 0,
      name: "",
    },
  });

  useEffect(() => {
    getProductById(id).then((response) => {
      setProd(response.data);
    });
  }, [id]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid item>
            <Paper className={classes.paper}>
              <IconButton className={classes.buttonStyle}></IconButton>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Nume : {prod.name}</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              Categorie : {prod.productCategoryDto.name}
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Pret : {prod.price}</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Greutate : {prod.weight}</Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Grid>
                <Paper className={classes.paper}>
                  <IconButton
                    className={classes.buttonStyle}
                    onClick={() => {
                      addToCart(prod);
                    }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid>
                <Paper className={classes.paper}>
                  <Link to={{ pathname: `/` }}>
                    <IconButton
                      className={classes.buttonStyle}
                      onClick={() => {
                        deleteProductById(prod.id);
                      }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Paper className={classes.imageStyle}>
              <img src={prod.imageUrl} width="200" height="200" />
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>{prod.description}</Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paper}>
            <Link to={{ pathname: `/update/${prod.id}`, state: { prod } }}>
              <IconButton className={classes.buttonStyle}>
                <UpdateIcon />
              </IconButton>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
