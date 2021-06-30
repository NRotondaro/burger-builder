import Logo from "../Logo";
import NavigationItems from "./NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../UI/Backdrop";

const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
  return (
    <div>
      <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
