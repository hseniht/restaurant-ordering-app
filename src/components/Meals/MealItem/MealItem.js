import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "../Meals.module.scss";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../contexts/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const prices = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount: amount,
      price,
    });
  };
  return (
    <li className={classes.mealList}>
      <Stack direction="column">
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography
          component="div"
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {prices}
        </Typography>
      </Stack>
      <MealItemForm id={id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
