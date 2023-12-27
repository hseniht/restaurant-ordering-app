import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import Paper from "@mui/material/Paper";
import classes from "./Meals.module.scss";
const Meals = () => {
  return (
    // <Paper className={classes["menu-container"]} elevation={3}>
    //   {/* <MealsSummary /> */}
    // </Paper>
      <AvailableMeals />
  );
};

export default Meals;
