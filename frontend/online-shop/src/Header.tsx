import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import { useStyles } from "./styles/tableStyles";

const Header = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Link to={{ pathname: `/` }}>
        <IconButton className={useStyles().buttonStyle}>
          <HomeIcon />
        </IconButton>
      </Link>
    </Grid>
    <Grid item xs={12} sm={6}>
      <IconButton className={useStyles().buttonStyle}>
        <ShoppingCartIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default Header;
