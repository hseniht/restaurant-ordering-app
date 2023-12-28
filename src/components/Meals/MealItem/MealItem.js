import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "../Meals.module.scss";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../contexts/cart-context";
import Badge from "@mui/material/Badge";

const MealThumbnail = ({ className, image, amount }) => {
  return (
    <Badge color="salsa" overlap="rectangular" badgeContent={amount}>
      <img className={className} src={image} />
    </Badge>
  );
};

const MealItem = ({ id, name, description, price, image, amount }) => {
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
      {image && (
        <MealThumbnail
          className={classes["menu-thumbnail"]}
          image={image}
          amount={amount}
        />
      )}
      <Stack
        direction="column"
        alignItems="flex-start"
        sx={{ width: "70%", paddingLeft: "1em" }}
      >
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          component="div"
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {prices}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        // spacing={0}
      >
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </Stack>
    </li>
  );
};

export default MealItem;
