import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = (props) => {
	return (
		<div className={styles.BuildControl}>
			<p className={styles.Label}>
				{props.igKey} ${props.price}
			</p>
			<button
				className={styles.Less}
				onClick={props.remove.bind(this, props.igKey)}
				disabled={props.disableIngredient[props.igKey].count}
			>
				Less
			</button>
			<button className={styles.More} onClick={props.add.bind(this, props.igKey)}>
				More
			</button>
		</div>
	);
};

export default buildControl;
