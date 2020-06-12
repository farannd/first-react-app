import React from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Modal.js] shouldComponentUpdate');
		return nextProps.show !== this.props.show || nextProps.loadPurchase !== this.props.loadPurchase;
	}

	componentDidUpdate() {
		console.log('[Modal.js] component did update');
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.cancelModal} />
				<div
					className={styles.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}
				>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
