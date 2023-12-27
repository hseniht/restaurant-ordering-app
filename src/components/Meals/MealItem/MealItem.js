import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "../Meals.module.scss";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../contexts/cart-context";

const MealItem = ({ id, name, description, price, image }) => {
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
      {image && <img className={classes["menu-thumbnail"]} src={image} />}
      <Stack direction="column" alignItems="flex-start" sx={{ width: "70%" }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        // spacing={0}
      >
        <Typography
          component="div"
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {prices}
        </Typography>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </Stack>
    </li>
  );
};

export default MealItem;
