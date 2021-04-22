import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../styles/tableStyles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductDetails = (props: any) => {
  const product = props.location.state.product;
  const classes = useStyles();
  const productService = new ProductService();

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
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Grid>
                <Paper className={classes.paper}>
                  <IconButton className={classes.buttonStyle}>
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
                        productService.deleteProductById(product.id);
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
function componentDidMount() {
  throw new Error("Function not implemented.");
}
