import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
	let drawerStyles = [ styles.SideDrawer, styles.Close ];
	if (props.show) {
		drawerStyles = [ styles.SideDrawer, styles.Open ];
	}
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.clicked} />
			<div className={drawerStyles.join(' ')}>
				<div className={styles.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
