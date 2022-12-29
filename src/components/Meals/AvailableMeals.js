import { DUMMY_MEALS } from "./dummy-meals";
import Card from "@mui/material/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./Meals.module.scss";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section>
      <Card>
        <ul className={classes["meals-menu"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
