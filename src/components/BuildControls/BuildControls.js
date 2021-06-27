import classes from './BuildControls.module.css';
import BuildControl from './BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'chesse'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
);

export default BuildControls;
