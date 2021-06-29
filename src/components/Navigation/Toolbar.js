import classes from './Toolbar.module.css';
import Logo from '../Logo';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;