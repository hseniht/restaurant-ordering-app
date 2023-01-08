import * as React from "react";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "../../UI/Tabs";
import MealItem from "../MealItem/MealItem";
import classes from "../Meals.module.scss";

//menu items in one single poge
export const SingleList = ({ items }) => {
  return (
    <Card>
      <ul className={classes["meals-menu"]}>{items}</ul>
    </Card>
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
        >
          {/* <Tab label="Item One" {...a11yProps(0)} /> */}
          <Tab label="Appetizers" />
          <Tab label="Mains" />
          <Tab label="Drinks" />
          <Tab label="Desserts" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SingleList items={appetizerList} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SingleList items={mainList} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SingleList items={drinkList} />
      </TabPanel>{" "}
      <TabPanel value={value} index={3}>
        <SingleList items={dessertList} />
      </TabPanel>
    </Box>
  );
}
