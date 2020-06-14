import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
	return (
		<ul className={styles.NavigationItems}>
			<NavigationItem linkUrl="/burgerbuilder">Burger Builder</NavigationItem>
			<NavigationItem linkUrl="/orders">Orders</NavigationItem>
		</ul>
	);
};

export default navigationItems;
