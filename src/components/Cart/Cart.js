import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cancelOrderHandler = () => {
    setIsCheckout(false);
    cartCtx.ui.handleHide();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="cart-action" style={{ textAlign: "right" }}>
      <Button
        onClick={cartCtx.ui.handleHide}
        aria-label="add"
        variant="outlined"
        color="salsa"
        sx={{ marginRight: "1em" }}
      >
        Close
      </Button>
      {hasItems && (
        <Button
          onClick={orderHandler}
          aria-label="add"
          variant="contained"
          color="salsa"
        >
          Order
        </Button>
      )}
    </div>
  );

  return (
    cartCtx.ui.showCart && (
      <Modal onClose={cartCtx.ui.handleHide}>
        <div className="cart-item">
          <h1>Cart summary</h1>
        </div>
        {cartItems}
        <div className={classes["cart-total"]}>
          <h3>Total amount: </h3>
          <h3>{totalAmount}</h3>
        </div>
        <br />
        {isCheckout && <Checkout onCancel={cancelOrderHandler} />}
        {!isCheckout && modalActions}
      </Modal>
    )
  );
};

export default Cart;
