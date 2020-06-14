import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
	<div className={styles.Logo} style={{ height: props.heigth }}>
		<Link to="/">
			<img src={burgerLogo} alt="MyBurger" />
		</Link>
	</div>
);

export default logo;
