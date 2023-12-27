// import { DUMMY_MEALS } from "./dummy-meals";
import MealItem from "./MealItem/MealItem";
import classes from "./Meals.module.scss";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { DUMMY_MEALS } from "./dummy-meals";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { SingleList } from "./MealsMenu/MealsMenu";
import TabbedMenu from "./MealsMenu/MealsMenu";
import { MENU_API_URL } from "../../constants/constants";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHTTPError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(MENU_API_URL);
      const responseData = await response.json();

      const loadedMeals = [];

      //loop object
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          type: responseData[key].type,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHTTPError(error.message);
    });
  }, []);

  const loadDummyData = () => {
    setMeals(DUMMY_MEALS);
  };

  const errorForm = (
    <div className={classes.mealsError}>
      <p style={{ color: "red" }}>{httpError}</p>
      <p>Try again</p>
      <Button
        variant="contained"
        onClick={loadDummyData}
        endIcon={<RotateLeftIcon />}
      >
        Offline Mode
      </Button>
    </div>
  );

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  //if loading
  if (isLoading) {
    return (
      <section className={classes.mealsLoader}>
        <p>Loading ...</p>
      </section>
    );
  }
  //if encountered error
  if (httpError) {
    return (
      <section>
        {meals.length === 0 ? (
          errorForm
        ) : (
          //fallback form
          <TabbedMenu list={meals} />
          // <SingleList items={mealsList} />
        )}
      </section>
    );
  }
  //normal render
  return (
    <section>
      <TabbedMenu list={meals} />
      {/* <SingleList items={mealsList} /> */}
    </section>
  );
};

export default AvailableMeals;
