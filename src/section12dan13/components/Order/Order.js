import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
	let customer = Object.keys(props.customer).map((igKey) => {
		return (
			<li key={igKey}>
				<p>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.customer[igKey]}
				</p>
			</li>
		);
	});

	let ingredients = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<p>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey].count}
				</p>
			</li>
		);
	});

	return (
		<div className={styles.Order}>
			<h1>Order id's {props.id}</h1>
			<p>Customer : </p>
			<ul>{customer}</ul>
			<p>Ingredients :</p>
			<ul>{ingredients}</ul>
			<p>Method Delivery : {props.methodDelivery}</p>
			<p>
				Price: <strong>${props.totalPrice}</strong>
			</p>
		</div>
	);
};

export default Order;
