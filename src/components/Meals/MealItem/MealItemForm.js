import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

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
    <form onSubmit={submitHandler}>
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
      />
      <Button type="submit" aria-label="add" variant="contained" color="salsa">
        <AddIcon />
      </Button>
    </form>
  );
};

export default MealItemForm;
