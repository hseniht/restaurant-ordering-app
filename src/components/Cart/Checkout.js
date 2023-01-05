import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import classes from "./Cart.module.css";

//helper
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [inputsValidity, setInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredNameIsValid = !isEmpty(name);
    const enteredStreetIsValid = !isEmpty(street);
    const enteredCityIsValid = !isEmpty(city);
    const enteredPostalIsValid = isFiveChars(postal);

    setInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    //submit cart data
    props.onConfirm({
      name: name,
      street: street,
      city: city,
      postal: postal,
    });
  };
  return (
    <form className={classes["user-details-form"]} onSubmit={confirmHandler}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Your name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!inputsValidity.name}
            helperText={!inputsValidity.name && "Please enter a valid name"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="street"
            label="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            fullWidth
            variant="standard"
            error={!inputsValidity.street}
            helperText={!inputsValidity.street && "Please enter a valid street"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="postal"
            label="Postal"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            fullWidth
            variant="standard"
            error={!inputsValidity.postal}
            helperText={
              !inputsValidity.postal &&
              "Please enter a valid postcode (5 characters long!)"
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="city"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            variant="standard"
            error={!inputsValidity.city}
            helperText={!inputsValidity.city && "Please enter a valid city"}
          />
        </Grid>
      </Grid>
      <br />
      <div className="checkout-action" style={{ textAlign: "right" }}>
        <Button
          onClick={props.onCancel}
          aria-label="add"
          variant="outlined"
          color="salsa"
          sx={{ marginRight: "1em" }}
        >
          Cancel
        </Button>
        <Button
          //   onClick={cartCtx.ui.handleShow}
          aria-label="confirm"
          variant="contained"
          color="salsa"
          type="submit"
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
