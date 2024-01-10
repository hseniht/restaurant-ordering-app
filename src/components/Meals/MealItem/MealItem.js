import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "../Meals.module.scss";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../contexts/cart-context";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { MUIDialog } from "../../UI/Modal";
import CartItem, { QuantityControl } from "../../Cart/CartItem";

const MealThumbnail = ({ className, image, onClick }) => {
  return <img className={className} src={image} onClick={onClick} />;
};
// HOC
const withMealBadge =
  (WrappedComponent) =>
  ({ amount, ...props }) =>
    (
      <Badge color="salsa" overlap="rectangular" badgeContent={amount}>
        <WrappedComponent {...props} />
      </Badge>
    );

const MealThumbnailWithBadge = withMealBadge(MealThumbnail);

const MealCalculator = ({ amount }) => {
  const cartCtx = useContext(CartContext);
};

const MealInfo = ({ name, price, description }) => {
  return (
    <div
      className={classes["meals-info"]}
      // sx={{ width: "70%", paddingLeft: "1em" }}
    >
      <div className={classes["meals-info__heading"]}>
        <Typography className={classes["title"]} variant="h6" component="h6">
          {name}
        </Typography>
        <Typography
          className={classes["price"]}
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {price}
        </Typography>
      </div>
      <Typography
        className={classes["meals-info__body"]}
        variant="caption"
        component={"p"}
      >
        {description}
      </Typography>
    </div>
  );
};

const MealDetailedInfo = ({
  amount,
  description,
  image,
  name,
  price,
  priceStr,
  id,
}) => {
  const cartCtx = useContext(CartContext);
  const item = { id, name, price, amount };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <>
      <MealThumbnail
        className={classes["menu-thumbnail__dialog"]}
        image={image}
        amount={amount}
      />
      <MealInfo name={name} price={priceStr} description={description} />
      {/* <MealCalculator/> */}
      {/* <CartItem
        key={id}
        name={name}
        amount={amount}
        price={rawPrice}
        onRemove={cartItemRemoveHandler.bind(null, id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      /> */}
      <QuantityControl
        className={classes["meal-quantity-control"]}
        onRemove={cartItemRemoveHandler.bind(null, id)}
        onAdd={cartItemAddHandler.bind(null, item)}
        amount={amount}
      />
    </>
  );
};

const MealItem = ({ id, name, description, price, image, amount }) => {
  const cartCtx = useContext(CartContext);
  const [openMeal, setOpenMeal] = useState(false);

  const priceStr = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // e.stopPropagation(); // Stop dialog event propagation
    cartCtx.addItem({
      id,
      name,
      amount: amount,
      price,
    });
  };

  const handleMenuClick = () => {
    setOpenMeal(true);
  };
  return (
    <>
      <li className={classes.mealList}>
        {image && (
          <MealThumbnailWithBadge
            className={classes["menu-thumbnail"]}
            image={image}
            amount={amount}
            onClick={handleMenuClick}
          />
        )}
        <MealInfo name={name} price={priceStr} description={description} />
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </li>
      <MUIDialog
        // klass={{ root: "test" + classes["menu-dialog__details"] }}
        rootClass={classes["menu-dialog__details--root"]}
        dialogClass={classes["menu-dialog__details--body"]}
        open={openMeal}
        onClose={setOpenMeal}
        // title={name}
      >
        {/* Spread Props baby! */}
        <MealDetailedInfo
          {...{
            amount,
            description,
            id,
            image,
            name,
            price,
            priceStr,
          }}
        />
      </MUIDialog>
    </>
  );
};

export default MealItem;
