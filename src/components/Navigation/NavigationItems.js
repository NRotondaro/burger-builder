import classes from "./NavigationItems.module.css";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <a href="/">Burger Builder</a>
    </li>
    <li className={classes.NavigationItem}>
      <a href="/">Checkout</a>
    </li>
  </ul>
);

export default NavigationItems;
