import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import AxiosOrders from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		order: {},
		error: null,
		loadData: false
	};
	componentDidMount() {
		AxiosOrders.get('/orders.json')
			.then((response) => {
				console.log(response.data);
				this.setState({
					order: response.data,
					loadData: true
				});
				return response;
			})
			.catch((error) => {
				this.setState({
					error: error.message,
					loadData: true
				});
			});
	}

	render() {
		let show = <Spinner />;
		let order = Object.keys(this.state.order).reverse();

		if (this.state.loadData) {
			show = order.map((igKey) => {
				return (
					<Order
						key={igKey}
						id={igKey}
						ingredients={this.state.order[igKey].ingredients}
						customer={this.state.order[igKey].customer}
						totalPrice={this.state.order[igKey].totalPrice}
						methodDelivery={this.state.order[igKey].methodDelivery}
					/>
				);
			});
		}

		return <div>{show}</div>;
	}
}

export default withErrorHandler(Orders, AxiosOrders);
