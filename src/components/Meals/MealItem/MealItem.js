import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "../Meals.module.scss";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../../contexts/cart-context";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { MUIDialog } from "../../UI/Modal";

const MealThumbnail = ({ className, image, amount, onClick }) => {
  return (
    <Badge color="salsa" overlap="rectangular" badgeContent={amount}>
      <img className={className} src={image} onClick={onClick} />
    </Badge>
  );
};

const MealInfo = ({ name, price, description }) => {
  return (
    <div
      className={classes["meals-info"]}
      // sx={{ width: "70%", paddingLeft: "1em" }}
    >
      <div className={classes["meals-info__heading"]}>
        <Typography className="test" variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          component="div"
          sx={{ fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {price}
        </Typography>
      </div>
      <Typography className={classes["meals-info__body"]} variant="body2">{description}</Typography>
    </div>
  );
};

const MealDetailedInfo = ({ amount, description, image, name, price }) => {
  return (
    <>
      <MealThumbnail
        className={classes["menu-thumbnail__dialog"]}
        image={image}
        amount={amount}
      />
      <MealInfo name={name} price={price} description={description} />
    </>
  );
};

const MealItem = ({ id, name, description, price, image, amount }) => {
  const cartCtx = useContext(CartContext);
  const [openMeal, setOpenMeal] = useState(false);

  const prices = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount: amount,
      price,
    });
  };

  const handleMenuClick = () => {
    setOpenMeal(true);
    console.log("tk open up");
  };
  return (
    <li className={classes.mealList}>
      {image && (
        <MealThumbnail
          className={classes["menu-thumbnail"]}
          image={image}
          amount={amount}
          onClick={handleMenuClick}
        />
      )}
      <MUIDialog
        // klass={{ root: "test" + classes["menu-dialog__details"] }}
        rootClass={classes["menu-dialog__details--root"]}
        dialogClass={classes["menu-dialog__details--body"]}
        open={openMeal}
        onClose={setOpenMeal}
        // title={name}
      >
        {/* <MealThumbnail
          className={classes["menu-thumbnail"]}
          image={image}
          amount={amount}
        />
        <MealInfo name={name} price={prices} description={description} /> */}
        {/* Spread Props baby! */}
        <MealDetailedInfo {...{ amount, description, image, name, price: prices }} />
      </MUIDialog>
      <MealInfo name={name} price={prices} description={description} />
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
