import { Component } from "react";

import Burger from "../components/Burger";

class BurgerBuilder extends Component {
    render () {
        return (
            <div>
                <Burger />
                <div>Build controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;