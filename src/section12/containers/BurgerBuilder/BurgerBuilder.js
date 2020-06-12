import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
	state = {
		//data ingredient di fetching dari database
		ingredients: null,
		//untuk menghitung total harga dari semua ingredient
		totalPrice: 4,
		//untuk mengecek apakah user nge klik ingredient
		totalCount: true,
		//untuk menentukan apakah button order di klik atau tidak shg modal ditampilkan
		purchasing: false,
		//untuk mengecek apakah button purchasing di klik shg menampilkan loader
		loadingPurchasing: false,
		//handler untuk ketika terjadi gagal dalam fetching data dari database
		error: false
	};

	componentDidMount() {
		axiosOrders
			.get('/ingredients.json')
			.then((response) => {
				this.setState({
					ingredients: response.data
				});
				return response;
			})
			.catch((error) => {
				this.setState({
					error: error.message
				});
			});
	}

	//untuk menambahkan ingredient dan total price
	addIngredientsHandler = (type) => {
		let newIngredients = JSON.parse(JSON.stringify(this.state.ingredients));
		newIngredients[type].count += 1;

		let newPrice = this.state.totalPrice + newIngredients[type].price;

		this.setState({
			ingredients: newIngredients,
			totalPrice: newPrice
		});

		this.orderHandler(newIngredients);
	};

	//untuk mengurangi ingredient dan price dengan kondisi harus terlebih dahulu mengeklik tambah
	removeIngredientsHandler = (type) => {
		let newIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

		let newPrice = this.state.totalPrice;

		if (newIngredients[type].count > 0) {
			newIngredients[type].count -= 1;
			newPrice -= newIngredients[type].price;
		}

		this.setState({
			ingredients: newIngredients,
			totalPrice: newPrice
		});
		this.orderHandler(newIngredients);
	};

	//untuk mengecek apakah user nge klik ingredient shg tombol order dapat di klik
	orderHandler = (ingredients) => {
		let newOrder = null;
		for (let key in ingredients) {
			newOrder = newOrder + ingredients[key].count;
		}
		if (newOrder <= 0) {
			this.setState({
				totalCount: true
			});
		} else {
			this.setState({
				totalCount: false
			});
		}
	};

	//untuk merubah state purchase menjadi true untuk menampilkan modal dri order summary
	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	//untuk merubah state purchase menjadi false untuk menutup order summary
	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	//ketika user nge klik continue dalam order summary
	purchaseContinueHandler = () => {
		this.setState({ loadingPurchasing: true });

		const order = {
			ingredients: this.state.ingredients,
			totalPrice: this.state.totalPrice,
			customer: {
				name: 'rose',
				address: 'korea'
			},
			methodDelivery: 'fastest'
		};

		axiosOrders
			.post('/orders.json', order)
			.then((response) => {
				console.log(response);
				this.setState({ loadingPurchasing: false, purchasing: false });
			})
			.catch((error) => {
				this.setState({ loadingPurchasing: false, purchasing: false });
			});
	};

	render = () => {
		//untuk menentukan tombol less setiap ingredient disable atau tidak
		const disable = JSON.parse(JSON.stringify(this.state.ingredients));
		for (let key in disable) {
			if (disable[key].count === 0) disable[key].count = true;
			else disable[key].count = false;
		}

		//untuk loader menunggu data ingredient yang fetch dari database
		let orderSummary = null;
		let burger = this.state.error ? this.state.error : <Spinner />;

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						disableIngredient={disable}
						disableOrder={this.state.totalCount}
						add={this.addIngredientsHandler}
						remove={this.removeIngredientsHandler}
						orderPurchase={this.purchaseHandler}
					/>
				</Aux>
			);
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					price={this.state.totalPrice}
					cancelOrder={this.purchaseCancelHandler}
					continueOrder={this.purchaseContinueHandler}
				/>
			);
		}

		//untuk loader menunggu post data purchase order ke database
		if (this.state.loadingPurchasing) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					cancelModal={this.purchaseCancelHandler}
					loadPurchase={this.state.loadingPurchasing}
				>
					{orderSummary}
				</Modal>
				{burger}
				{this.props.children}
			</Aux>
		);
	};
}

export default withErrorHandler(BurgerBuilder, axiosOrders);
