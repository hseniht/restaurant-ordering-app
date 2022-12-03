import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import classes from "./Meals.module.css";

const Content = () => {
  return (
    <section>
      <h2>Delicious Food</h2>
      <p>
        Choose your favourite meal from our broad selection of available Meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All of our meals are coooked with high-quality ingrediants, just-in-time
        and of course by experianced chefs!
      </p>
    </section>
  );
};

export default function MealsSummary() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        ".summary": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper className={classes.summary} elevation={3}>
        <Content />
      </Paper>
    </Box>
  );
}
