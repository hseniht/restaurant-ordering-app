import * as React from "react";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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
    <div className="menu-frame">
      <Divider sx={{ color: green }}>
        <Stack alignItems="center" spacing={0} justifyContent="space-around">
          <h2 style={{ margin: 0 }}>{title}</h2>
          {icon}
        </Stack>
      </Divider>
      {children}
    </div>
  );
};

export default function TabbedMenu({ list }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let appetizerList = [];
  let mainList = [];
  let drinkList = [];
  let dessertList = [];

  list.map((meal) => {
    const list = (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
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
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor={"inherit"}
          // textColor={theme.palette.salsa.main}
          // indicatorColor="inherit"
          TabIndicatorProps={{
            style: { color: "red", backgroundColor: green },
          }}
        >
          {/* <Tab label="Item One" {...a11yProps(0)} /> */}
          <Tab label="Appetizers" />
          <Tab label="Mains" />
          <Tab label="Drinks" />
          <Tab label="Desserts" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MenuFrame title={"Appetizers"} icon={ICON_APPETIZER}>
          <SingleList items={appetizerList} />
        </MenuFrame>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuFrame title={"Mains"} icon={ICON_MAINS}>
          <SingleList items={mainList} />
        </MenuFrame>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MenuFrame title={"Drinks"} icon={ICON_DRINKS}>
          <SingleList items={drinkList} />
        </MenuFrame>
      </TabPanel>{" "}
      <TabPanel value={value} index={3}>
        <MenuFrame title={"Desserts"} icon={ICON_DESSERTS}>
          <SingleList items={dessertList} />
        </MenuFrame>
      </TabPanel>
    </Box>
  );
}
