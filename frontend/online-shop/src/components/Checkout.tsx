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
  const [errors, setErrors] = React.useState({
    addressCountry: "",
    addressCity: "",
    addressCounty: "",
    addressStreetAddress: "",
  });
  const [errstatus, setErrstatus] = React.useState({
    addressCountry: false,
    addressCity: false,
    addressCounty: false,
    addressStreetAddress: false,
  });

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
    validate();
    console.log(errors);

    initOrder.address = addr;
    await addNewOrder(initOrder).catch(function (error) {
      if (error.response) {
        setMessage("FAILED to create order Server Error");
      }
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    let temp: AddressInterface = {
      addressCountry: "",
      addressCity: "",
      addressCounty: "",
      addressStreetAddress: "",
    };

    temp.addressCountry = addr.addressCountry ? "" : "Field required";
    temp.addressCity = addr.addressCity ? "" : "Field required";
    temp.addressCounty = new RegExp("(^[a-zA-Z]+(s*[a-zA-Z]+)*$)|(^$)").test(
      addr.addressCounty
    )
      ? ""
      : "County not valid";
    temp.addressStreetAddress = addr.addressStreetAddress
      ? ""
      : "Field required";

    let statusErros = {
      addressCountry: true,
      addressCity: true,
      addressCounty: true,
      addressStreetAddress: true,
    };

    statusErros.addressCountry = temp.addressCountry ? true : false;
    statusErros.addressCity = temp.addressCity ? true : false;
    statusErros.addressCounty = temp.addressCounty ? true : false;
    statusErros.addressStreetAddress = temp.addressStreetAddress ? true : false;
    setErrors(temp);
    setErrstatus(statusErros);
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
            error={errstatus.addressCountry}
            helperText={errors.addressCountry}
            id="address-country"
            label="Country "
            variant="outlined"
            onChange={(event) => (addr.addressCountry = event.target.value)}
          />
          <TextField
            error={errstatus.addressCity}
            helperText={errors.addressCity}
            id="address-city"
            label="City "
            variant="outlined"
            onChange={(event) => (addr.addressCity = event.target.value)}
          />
          <TextField
            error={errstatus.addressCounty}
            helperText={errors.addressCounty}
            id="address-county"
            label="County "
            variant="outlined"
            onChange={(event) => (addr.addressCounty = event.target.value)}
          />
          <TextField
            error={errstatus.addressStreetAddress}
            helperText={errors.addressStreetAddress}
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
