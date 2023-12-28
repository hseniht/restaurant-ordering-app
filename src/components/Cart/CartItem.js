import classes from "./Cart.module.css";
import { BtnRound } from "../UI/Buttons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const QuantityControl = ({ amount, className, onRemove, onAdd }) => {
  const placeHolderAmount = <span style={{ opacity: "0.5" }}>{"0"}</span>;
  const amountText = <span>{amount}</span>;
  return (
    <div className={className}>
      <BtnRound
        size="small"
        type="submit"
        aria-label="add"
        variant="outlined"
        color="salsa"
        onClick={onRemove}
        disabled={!amount}
      >
        <RemoveIcon />
      </BtnRound>
      {amount ? amountText : placeHolderAmount}
      <BtnRound
        size="small"
        type="submit"
        aria-label="add"
        variant="contained"
        color="salsa"
        onClick={onAdd}
      >
        <AddIcon />
      </BtnRound>
    </div>
  );
};

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
      <QuantityControl
        className={classes.actions}
        onRemove={props.onRemove}
        onAdd={props.onAdd}
        amount={props.amount}
      />
    </li>
  );
};

export default CartItem;
