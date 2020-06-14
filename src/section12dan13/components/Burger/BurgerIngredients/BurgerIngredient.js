import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
	render() {
		let ingredient = null;

		switch (this.props.types) {
			case 'bread-bottom':
				ingredient = <div className={styles.Bottom} />;
				break;
			case 'bread-top':
				ingredient = (
					<div className={styles.BreadTop}>
						<div className={styles.Seeds1} />
						<div className={styles.Seeds2} />
					</div>
				);
				break;
			case 'meat':
				ingredient = <div className={styles.Meat} />;
				break;
			case 'cheese':
				ingredient = <div className={styles.Cheese} />;
				break;
			case 'salad':
				ingredient = <div className={styles.Salad} />;
				break;
			case 'bacon':
				ingredient = <div className={styles.Bacon} />;
				break;

			default:
				ingredient = null;
		}

		return <Aux>{ingredient}</Aux>;
	}
}

BurgerIngredient.propTypes = {
	types: PropTypes.string.isRequired
};

export default BurgerIngredient;
