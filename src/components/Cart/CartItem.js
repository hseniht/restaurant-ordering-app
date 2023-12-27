import classes from "./Cart.module.css";
import { BtnRound } from "../UI/Buttons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          {/* <span className={classes.amount}>x {props.amount}</span> */}
        </div>
      </div>
      <div className={classes.actions}>
        <BtnRound
          size="small"
          type="submit"
          aria-label="add"
          variant="outlined"
          color="salsa"
          onClick={props.onRemove}
        >
          <RemoveIcon />
        </BtnRound>
        <span>{props.amount}</span>
        <BtnRound
          size="small"
          type="submit"
          aria-label="add"
          variant="contained"
          color="salsa"
          onClick={props.onAdd}
        >
          <AddIcon />
        </BtnRound>
      </div>
    </li>
  );
};

export default CartItem;
