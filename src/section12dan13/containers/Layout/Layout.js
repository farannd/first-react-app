import React from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
	state = {
		showSideDrawer: false
	};

	closeSideDrawerHandler = () => {
		this.setState({
			showSideDrawer: false
		});
	};

	toogleSideDrawerHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<div>
				<Toolbar clicked={this.toogleSideDrawerHandler} />
				<SideDrawer show={this.state.showSideDrawer} clicked={this.closeSideDrawerHandler} />
				<main className={styles.main}>{this.props.children}</main>
			</div>
		);
	}
}

export default Layout;
