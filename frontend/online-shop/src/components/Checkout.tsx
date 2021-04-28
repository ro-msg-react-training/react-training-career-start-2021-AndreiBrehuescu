import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Label } from "@material-ui/icons";
import React from "react";
import { AddressInterface } from "../interfaces/AddressInterface";
import { CustomerDto } from "../interfaces/CustomerInterface";
import { OrderDetailsDto } from "../interfaces/OrderDetailsInterface";
import { OrderDtoInterface } from "../interfaces/OrderInterface";
import { addNewOrder } from "../services/OrderService";
import { store } from "../store/store";

const initAddress: AddressInterface = {
  addressCountry: "",
  addressCity: "",
  addressCounty: "",
  addressStreetAddress: "",
};

const user: CustomerDto = {
  id: 1,
  firstname: "Andrei",
  lastname: "Brehuescu",
  username: "andre123",
  password: "1234678",
  emailaddress: "andrei@gmail.com",
};

const initOrder: OrderDtoInterface = {
  id: null,
  locationDto: null,
  customerDto: user,
  createdAt: null,
  address: initAddress,
  detailsDtos: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Order created");

  const addr = initAddress;
  const classes = useStyles();
  let totalPrice = 0.0;

  const products = store.getState().cart.products;

  products.map((prod) => (totalPrice += prod.price));

  var prodDetails: OrderDetailsDto[] = [];

  const productDetailsDtos = products.map((prod) =>
    prodDetails.push({
      idOrder: null,
      idProduct: prod.id,
      quantity: 1,
    })
  );

  initOrder.detailsDtos = prodDetails;

  const createOrderClick = async () => {
    initOrder.address = addr;
    await addNewOrder(initOrder).catch(function (error) {
      if (error.response) {
        setMessage("FAILED to create order");
      }
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Order status</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="address-country"
            label="Country "
            variant="outlined"
            onChange={(event) => (addr.addressCountry = event.target.value)}
          />
          <TextField
            id="address-city"
            label="City "
            variant="outlined"
            onChange={(event) => (addr.addressCity = event.target.value)}
          />
          <TextField
            id="address-county"
            label="County "
            variant="outlined"
            onChange={(event) => (addr.addressCounty = event.target.value)}
          />
          <TextField
            id="address-street"
            label="Street "
            variant="outlined"
            onChange={(event) =>
              (addr.addressStreetAddress = event.target.value)
            }
          />
          <TextField
            id="standard-read-only-input"
            label="Total price"
            defaultValue={totalPrice}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={createOrderClick}
          >
            Create Order
          </Button>
        </form>
      </div>
    </div>
  );
};
