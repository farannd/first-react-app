import React from 'react'

import Aux from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends React.Component  {
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    toogleSideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar
                    clicked={this.toogleSideDrawerHandler}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    clicked={this.closeSideDrawerHandler}/>
                <main className={styles.main}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout