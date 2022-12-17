import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/cart-context";
import classes from "./Header.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.salsa.main}`,
    padding: "0 4px",
  },
}));

export default function HeaderCart() {
  //destructered context (better for useEffect dependancy)
  const { items, ui } = React.useContext(CartContext);

  const [btnAnim, setBtnAnim] = React.useState(false);

  //in this case "reduce" can be used to get total amount from looping the items
  //curNumber is result from previous execution
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${btnAnim ? classes.bump : ""}`;

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnim(true);
    const timer = setTimeout(() => {
      setBtnAnim(false);
    }, 300);
    //cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <IconButton
      className={btnClasses}
      aria-label="cart"
      onClick={ui.handleShow}
    >
      <StyledBadge badgeContent={numberOfCartItems} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
