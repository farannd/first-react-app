import React from 'react';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
	render() {
		return (
			<Layout>
				<BurgerBuilder testProps="love myself" />
			</Layout>
		);
	}
}

export default App;
