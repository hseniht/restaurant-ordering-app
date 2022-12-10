import Button from "@mui/material/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal>
      <div className="cart-item">some item here</div>
      <br />
      <div className="cart-total">
        <span>Total amount</span>
        <span>Rm35.62</span>
      </div>
      <div className="cart-action">
        <Button aria-label="add" variant="outlined" color="salsa">
          Close
        </Button>
        <Button aria-label="add" variant="contained" color="salsa">
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
