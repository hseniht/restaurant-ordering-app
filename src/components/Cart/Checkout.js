import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("tk submiteed");
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className="">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="name"
              label="Your name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="street"
              label="Street"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="postal"
              label="Postal"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField id="city" label="City" fullWidth variant="standard" />
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
      </div>
    </form>
  );
};

export default Checkout;
