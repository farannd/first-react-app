import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styles from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
	return (
		<div className={styles.CheckoutSummary}>
			<h1>We hope it tasted well!</h1>
			<div>
				<Burger ingredients={props.ingredients} />
			</div>
			<p style={{ textAllign: 'center' }}>Total Price : {props.price}</p>
			<Button styleName="Danger" clicked={props.buttonCancel}>
				CANCEL
			</Button>
			<Button styleName="Success" clicked={props.buttonContinue}>
				CONTINUE
			</Button>
		</div>
	);
};

export default CheckoutSummary;
