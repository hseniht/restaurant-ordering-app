import * as React from "react";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TabPanel } from "../../UI/Tabs";
import MealItem from "../MealItem/MealItem";
import classes from "../Meals.module.scss";
import Divider from "@mui/material/Divider";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import IcecreamOutlinedIcon from "@mui/icons-material/IcecreamOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import { Stack } from "@mui/system";
import { theme } from "../../UI/palletes";
import { CartContext } from "../../../contexts/cart-context";

const ICON_APPETIZER = <KebabDiningOutlinedIcon />;
const ICON_MAINS = <RestaurantMenuOutlinedIcon />;
const ICON_DESSERTS = <IcecreamOutlinedIcon />;
const ICON_DRINKS = <LocalCafeOutlinedIcon />;

const green = theme.palette.salad.main;

//menu items in one single poge
export const SingleList = ({ items }) => {
  return <ul className={classes["meals-menu"]}>{items}</ul>;
};

const MenuFrame = ({ title, icon, children }) => {
  return (
    <div className={classes["menu-frame"]}>
      <Stack alignItems="center" spacing={0} justifyContent="space-around">
        <h2 style={{ margin: 0 }}>{title}</h2>
        {icon}
      </Stack>
      <Divider sx={{ color: green }}></Divider>
      {children}
    </div>
  );
};

const Menus = ({ value, index, title, icon, items }) => {
  return (
    <TabPanel className={classes["menu-panel"]} value={value} index={index}>
      <MenuFrame title={title} icon={icon}>
        <SingleList items={items} />
      </MenuFrame>
    </TabPanel>
  );
};

export default function TabbedMenu({ list }) {
  const [value, setValue] = React.useState(0);
  const cartCtx = React.useContext(CartContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let appetizerList = [];
  let mainList = [];
  let drinkList = [];
  let dessertList = [];

  list.map((meal) => {
    // Find the corresponding item in the cart based on id
    const mealInCart = cartCtx.items.find((item) => item.id === meal.id);
    const list = (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.imgSrc}
        amount={mealInCart && mealInCart.amount}
      />
    );
    switch (meal.type) {
      case "appetizer":
        appetizerList.push(list);
        break;
      case "main":
        mainList.push(list);
        break;
      case "drinks":
        drinkList.push(list);
        break;
      case "dessert":
        dessertList.push(list);
        break;
      default:
        break;
    }
  });

  return (
    <Paper elevation={3} className={classes["menu-container"]}>
      <Tabs
        className={classes["menu-tabs"]}
        centered
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor={"inherit"}
        // textColor={theme.palette.salsa.main}
        // indicatorColor="inherit"
        TabIndicatorProps={{
          style: { color: "red", backgroundColor: "unset" },
        }}
        sx={{ "& .Mui-selected": { color: "red", fontWeight: "bold" } }}
      >
        {/* <Tab label="Item One" {...a11yProps(0)} /> */}
        <Tab label="Appetizers" />
        <Tab label="Mains" />
        <Tab label="Drinks" />
        <Tab label="Desserts" />
      </Tabs>

      <Menus
        value={value}
        index={0}
        title="Appetizers"
        icon={ICON_APPETIZER}
        items={appetizerList}
      />
      <Menus
        value={value}
        index={1}
        title="Mains"
        icon={ICON_MAINS}
        items={mainList}
      />
      <Menus
        value={value}
        index={2}
        title="Drinks"
        icon={ICON_DRINKS}
        items={drinkList}
      />
      <Menus
        value={value}
        index={3}
        title="Desserts"
        icon={ICON_DESSERTS}
        items={dessertList}
      />
    </Paper>
  );
}
