import React, { Component } from 'react';

import styles from './Input.module.css';

class Input extends Component {
	render() {
		let inputElement = null;
		let inputClasses = [ styles.InputElement ];
		let errorMsg = '';

		//untuk mengecek apakah suatu elemen input valid atau tidak dan juga sudah disentuh atau tidak
		if (this.props.invalid && this.props.touched && this.props.inputEl !== 'methodDelivery') {
			inputClasses.push(styles.Invalid);
			errorMsg = <p className={styles.ErrorMsg}>Plese enter a valid {this.props.inputEl}</p>;
		}

		switch (this.props.inputtype) {
			case 'input':
				inputElement = (
					<input
						className={inputClasses.join(' ')}
						type={this.props.type}
						placeholder={this.props.placeholder}
						onChange={this.props.changehandler}
						value={this.props.value}
					/>
				);
				break;
			case 'textarea':
				inputElement = <textarea className={inputClasses.join(' ')} {...this.props} />;
				break;
			case 'select':
				let options = this.props.options.map((x) => {
					return (
						<option key={x.value} value={x.value}>
							{x.displayValue}
						</option>
					);
				});
				inputElement = (
					<select className={styles.InputElement} onChange={this.props.changehandler}>
						{options}
					</select>
				);
				break;
			default:
				inputElement = (
					<input
						className={inputClasses.join(' ')}
						type={this.props.type}
						placeholder={this.props.placeholder}
						onChange={this.props.changehandler}
						value={this.props.value}
					/>
				);
		}

		return (
			<div className={styles.Input}>
				<label className={styles.Label}>
					{this.props.label}
					{inputElement}
					{errorMsg}
				</label>
			</div>
		);
	}
}

export default Input;
