import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import classes from "../Meals.module.scss";

const StyledAddBtn = styled(Button)({
  minWidth: "unset",
  padding: "2px",
  margin: "0 12px",
  borderRadius: "50%",
});

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    //convert to number
    const enteredAmountNumber = +enteredAmount;
    //validation
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  let validationMessage = !amountIsValid && "Please enter valid amount (1 - 5)";

  return (
    <form className={classes["amount-form"]} onSubmit={submitHandler}>
      <TextField
        inputRef={amountInputRef}
        id={id}
        label="Amount"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: "1", max: "5" }}
        defaultValue="1"
        size="small"
        helperText={validationMessage}
        error={!amountIsValid}
        sx={{ display: "none" }}
      />
      <StyledAddBtn
        size="small"
        type="submit"
        aria-label="add"
        variant="contained"
        color="slate"
      >
        <AddIcon />
      </StyledAddBtn>
    </form>
  );
};

export default MealItemForm;
