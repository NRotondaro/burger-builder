import { Component } from "react";

import BurgerBuilder from "./containers/BurgerBuilder";
import Toolbar from "./components/Navigation/Toolbar";
import SideDrawer from "./components/Navigation/SideDrawer";

class App extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    } );
  }

  render() {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}  />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
