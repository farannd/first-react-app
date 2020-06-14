import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: { count: 0 },
			meat: { count: 0 },
			cheese: { count: 0 },
			bacon: { count: 0 }
		},
		loadingPurchasing: false,
		totalPrice: 0
	};

	componentDidMount() {
		this.parseQueryParams();
	}

	// componentDidUpdate() {
	// 	this.parseQueryParams();
	// }

	//Untuk mengambil nilai dari query strings
	parseQueryParams() {
		let newIngredients = {
			salad: { count: 0, price: 0.25 },
			meat: { count: 0, price: 1.25 },
			cheese: { count: 0, price: 0.5 },
			bacon: { count: 0, price: 0.75 }
		};

		//untuk mencari dan menyimpan nilai dari query param
		const query = new URLSearchParams(this.props.location.search);
		for (let param of query.entries()) {
			console.log(param);
			newIngredients[param[0]].count = parseInt(param[1]);
		}

		//untuk menghitung total price
		let igKey = Object.keys(newIngredients);
		let price = 4;
		for (let value of igKey) {
			price = price + newIngredients[value].count * newIngredients[value].price;
		}

		//updating state
		this.setState({
			ingredients: {
				...newIngredients
			},
			totalPrice: price
		});
	}

	//handler pada button cancel di checkout summary
	buttonCancelHandler = () => {
		this.props.history.goBack();
	};

	//ketika user nge klik continue dalam checkout summary
	buttonContinueHandler = () => {
		this.props.history.push('/checkout/contact-data');
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					buttonCancel={this.buttonCancelHandler}
					buttonContinue={this.buttonContinueHandler}
					ingredients={this.state.ingredients}
					price={this.state.totalPrice}
				/>
				<Route
					path={this.props.match.url + '/contact-data'}
					render={(props) => (
						<ContactData
							{...this.props}
							ingredients={this.state.ingredients}
							totalPrice={this.state.totalPrice}
						/>
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
