import Button from "@mui/material/Button";
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";
import Typography from "@mui/material/Typography";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const MessageWithThumbnail = ({ className, title, message, thumbnail }) => {
  return (
    <div className={className}>
      <Typography className={classes["title"]} variant="h6" component="h6">
        {title}
      </Typography>
      {thumbnail}
      <Typography
        className={classes["message"]}
        variant="caption"
        component={"p"}
      >
        {message}
      </Typography>
    </div>
  );
};

const CartEmpty = () => {
  return (
    <MessageWithThumbnail
      className={classes["cart-no-items"]}
      title={"Empty Menu"}
      message={"Looks like you haven't made your choice yet."}
      thumbnail={
        <LocalDiningIcon
          color="slate"
          sx={{ fontSize: "5em", padding: "10px", opacity: "0.5" }}
        />
      }
    />
  );
};

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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
  // isCheckout ? classes["cart-items--shrinked"] : classes["cart-items"]
  const cssShrinked = isCheckout ? { maxHeight: "35vh" } : null;

  const klass = `${classes["cart-items"]} ${
    isCheckout ? classes["checked"] : ""
  }`;
  const cartItems = (
    // <ul className={classes["cart-items"]} style={cssShrinked}>
    <ul className={klass}>
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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-480e0-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItem: cartCtx.items,
        }),
      }
    );
    //todo: add error handling
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const closeCartHandler = () => {
    cartCtx.ui.handleHide();
    setIsCheckout(false);
    setDidSubmit(false);
  };

  const modalActions = (
    <div className={classes["cart-action"]} style={{ textAlign: "right" }}>
      <Button
        onClick={cartCtx.ui.handleHide}
        aria-label="add"
        variant="outlined"
        color="slate"
        // sx={{ marginRight: "1em" }}
      >
        Close
      </Button>
      {hasItems && (
        <Button
          onClick={orderHandler}
          aria-label="add"
          variant="contained"
          color="slate"
          sx={{ marginLeft: "1em" }}
        >
          Order
        </Button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      <div className={classes["cart-heading"]}>
        <h1>Cart summary</h1>
        {hasItems && (
          <Button
            size="small"
            onClick={cartCtx.clearCart}
            aria-label="clearCart"
            variant="outlined"
            color="salsa"
          >
            {"Clear all"}
          </Button>
        )}
      </div>
      {!hasItems && <CartEmpty />}
      {cartItems}
      <div className={classes["cart-total"]}>
        <h3>Total amount: </h3>
        <h3>{totalAmount}</h3>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={cancelOrderHandler}
        />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const submittingModalContent = <p>Sending order data...</p>;
  const doneSubmittingModalContent = (
    <Fragment>
      <MessageWithThumbnail
        className={classes["cart-order-success"]}
        title={"Order Complete!"}
        message={
          "Success! Your order is now on its way to the kitchen. We appreciate your patronage!"
        }
        thumbnail={
          <TaskAltIcon
            color="salad"
            sx={{ fontSize: "5em", padding: "10px", opacity: "0.5" }}
          />
        }
      />
      <Button
        onClick={closeCartHandler}
        aria-label="add"
        variant="outlined"
        color="salsa"
        sx={{ display: "block", marginRight: "0", marginLeft: "auto" }}
      >
        Close
      </Button>
    </Fragment>
  );

  return (
    cartCtx.ui.showCart && (
      <Modal onClose={closeCartHandler}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && submittingModalContent}
        {!isSubmitting && didSubmit && doneSubmittingModalContent}
      </Modal>
    )
  );
};

export default Cart;
