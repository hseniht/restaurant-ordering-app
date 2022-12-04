import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({});

const MealItemForm = ({ id }) => {
  return (
    <form>
      <TextField id={id} label="Amount" />
      <Button aria-label="add" variant="contained" color="salsa">
        <AddIcon />
      </Button>
    </form>
  );
};

export default MealItemForm;
