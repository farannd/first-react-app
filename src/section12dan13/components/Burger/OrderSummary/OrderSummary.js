import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const newIngredients = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey].count}
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{newIngredients}</ul>
			<p>
				<strong>Total Price : ${props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button clicked={props.cancelOrder} styleName="Danger">
				Cancel
			</Button>
			{/* <Button clicked={props.continueOrder} styleName="Success">
				Continue
			</Button> */}
			<Link
				to={{
					pathname: '/checkout',
					search:
						'?bacon=' +
						props.ingredients['bacon'].count +
						'&cheese=' +
						props.ingredients['cheese'].count +
						'&meat=' +
						props.ingredients['meat'].count +
						'&salad=' +
						props.ingredients['salad'].count
				}}
			>
				<Button styleName="Success">Continue</Button>
			</Link>
		</Aux>
	);
};

export default withRouter(orderSummary);
