import Button from './UI/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalPrice.toFixed(2)} </strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </div>
  );
};

export default OrderSummary;
