import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route
							path="/burgerbuilder"
							render={(props) => <BurgerBuilder {...this.props} testProps="lovemyself" />}
						/>
						<Route path="/checkout" component={Checkout} />
						<Route path="/orders" component={Orders} />
						<Route path="/" exact render={() => <h1 style={{ textAlign: 'center' }}>Homepage</h1>} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
