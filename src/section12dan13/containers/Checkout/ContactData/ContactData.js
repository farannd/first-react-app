import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axiosOrders from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		order: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name'
				},
				value: '',
				validations: {
					require: true,
					minLength: 4,
					maxLength: 20
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-Mail'
				},
				value: '',
				validations: {
					require: true
				},
				valid: false,
				touched: false
			},
			address: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your adrress'
				},
				value: '',
				validations: {
					require: true
				},
				valid: false,
				touched: false
			},
			methodDelivery: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'Fastest', displayValue: 'Fastest' },
						{ value: 'Cheapest', displayValue: 'Cheapest' }
					],
					placeholder: 'Enter your method delivery'
				},
				value: 'Fastest'
			}
		},
		loadingPurchasing: false,
		validForm: false
	};

	//untuk mengecek input pada setiap elemen apakan inputan tersebut sudah sesuai dengan rules yang ada
	checkValidity = (value, rules) => {
		let isValid = true;

		if (rules.require) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		return isValid;
	};

	//berfungsi untuk menyimpan input dari form pada state
	inputFormsHandler = (event, inputEl) => {
		//meng clone atau copy secara deep dari state order
		let orderUpdate = {
			...this.state.order
		};
		let orderUpdateElement = {
			...orderUpdate[inputEl]
		};

		//meng assign nilai pada value
		orderUpdateElement.value = event.target.value;

		//meng assign nilai pada touched untuk validation
		orderUpdateElement.touched = true;

		//mengecek validity dari setiap input elemen
		if (inputEl !== 'methodDelivery') {
			orderUpdateElement.valid = this.checkValidity(orderUpdateElement.value, orderUpdateElement.validations);
		}

		orderUpdate[inputEl] = orderUpdateElement;

		//handler untuk menyatakan bahwa form dapat disubmit atau tidak
		let newValidForm = true;
		for (let x in orderUpdate) {
			if (x !== 'methodDelivery') {
				newValidForm = orderUpdate[x].valid && newValidForm;
			}
		}

		//updating state
		this.setState({
			order: {
				...orderUpdate
			},
			validForm: newValidForm
		});
	};

	// handler untuk submit pada form dan akan mengirimkan data yang udh diisi ke database
	submitHandler = (e) => {
		e.preventDefault();
		this.setState({ loadingPurchasing: true });

		const order = {
			ingredients: this.props.ingredients,
			totalPrice: this.props.totalPrice,
			customer: {
				name: this.state.order.name.value,
				address: this.state.order.address.value,
				email: this.state.order.email.value
			},
			methodDelivery: this.state.order.methodDelivery.value
		};

		//untuk mengecek apakah form bisa di submit dan jika bisa maka akan disubmit
		if (this.state.validForm) {
			axiosOrders
				.post('/orders.json', order)
				.then((response) => {
					console.log(response);
					this.setState({ loadingPurchasing: false });
					this.props.history.push('/orders');
				})
				.catch((error) => {
					this.setState({ loadingPurchasing: false });
				});
		}
	};

	render() {
		let order = JSON.parse(JSON.stringify(this.state.order));
		let showInput = Object.keys(order).map((inputEl) => {
			let result = null;
			if (inputEl === 'methodDelivery') {
				result = (
					<Input
						key={inputEl}
						inputEl={inputEl}
						inputtype={order[inputEl].elementType}
						label={order[inputEl].elementConfig.placeholder}
						options={order[inputEl].elementConfig.options}
						changehandler={(event) => this.inputFormsHandler(event, inputEl)}
						invalid={!order[inputEl].valid}
						touched={order[inputEl].touched}
					/>
				);
			} else {
				result = (
					<Input
						key={inputEl}
						inputEl={inputEl}
						inputtype={order[inputEl].elementType}
						type={order[inputEl].elementConfig.type}
						placeholder={order[inputEl].elementConfig.placeholder}
						label={order[inputEl].elementConfig.placeholder}
						value={order[inputEl].value}
						changehandler={(event) => this.inputFormsHandler(event, inputEl)}
						invalid={!order[inputEl].valid}
						touched={order[inputEl].touched}
					/>
				);
			}

			return result;
		});

		// untuk loader menunggu post data purchase order ke database
		if (this.state.loadingPurchasing) {
			order = <Spinner />;
		}

		return (
			<div className={styles.ContactData}>
				<h2>Enter Your Contact Data</h2>
				<form onSubmit={this.submitHandler}>
					{showInput}
					<Button styleName="Success" disabled={!this.state.validForm}>
						ORDER
					</Button>
				</form>
			</div>
		);
	}
}

export default ContactData;
