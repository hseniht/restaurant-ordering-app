import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    cartCtx.ui.showCart && (
      <Modal onClose={cartCtx.ui.handleHide}>
        <div className="cart-item">some item here</div>
        <br />
        {cartItems}
        <div className="cart-total">
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="cart-action">
          <Button
            onClick={cartCtx.ui.handleHide}
            aria-label="add"
            variant="outlined"
            color="salsa"
          >
            Close
          </Button>
          {hasItems && (
            <Button
              onClick={cartCtx.ui.handleShow}
              aria-label="add"
              variant="contained"
              color="salsa"
            >
              Order
            </Button>
          )}
        </div>
      </Modal>
    )
  );
};

export default Cart;
