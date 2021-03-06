import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const burgerControl = (props) => {
	let keys = Object.keys(props.ingredients);
	let buildControl = keys.map((igKey) => {
		return (
			<BuildControl
				igKey={igKey}
				key={igKey}
				price={props.ingredients[igKey].price}
				disableIngredient={props.disableIngredient}
				add={props.add}
				remove={props.remove}
			/>
		);
	});

	console.log(burgerControl);

	return (
		<div className={styles.BuildControls}>
			<p>Current Price : $ {props.price.toFixed(2)}</p>
			{buildControl}
			<button className={styles.OrderButton} disabled={props.disableOrder} onClick={props.orderPurchase}>
				Order Now
			</button>
		</div>
	);
};

export default burgerControl;
