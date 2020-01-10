import React from 'react'

import Layout from './components/Layout/Layout'
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder'

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>BurgerBuild App</h1>
                <Layout>
                    <BurgerBuild/>
                </Layout>
            </div>
        )
    }
}

export default App