import { Fragment } from "react";
import mealsImage from "../../assets/food-background.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TK Eats</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Only the freshest ingredients" />
      </div>
    </Fragment>
  );
};

export default Header;
