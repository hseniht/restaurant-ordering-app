import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    cartCtx.ui.showCart && (
      <Modal onClose={cartCtx.ui.handleHide}>
        <div className="cart-item">some item here</div>
        <br />
        <div className="cart-total">
          <span>Total amount</span>
          <span>Rm35.62</span>
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
          <Button
            onClick={cartCtx.ui.handleShow}
            aria-label="add"
            variant="contained"
            color="salsa"
          >
            Order
          </Button>
        </div>
      </Modal>
    )
  );
};

export default Cart;
