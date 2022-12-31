// import { DUMMY_MEALS } from "./dummy-meals";
import Card from "@mui/material/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./Meals.module.scss";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-480e0-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      //loop object
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      console.log("tk meals", loadedMeals);
      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  // todo: set fallback to dummy data for DEMO purpose
  // let mealsData = DUMMY_MEALS;
  let mealsData = meals;

  const mealsList = mealsData.map((meal) => (
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
