import React from 'react'

import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Hamburger from '../SideDrawer/Hamburger/Hamburger'

const toolbar = props => {
    return (
        <header className={styles.Toolbar}>
            <Hamburger
                clicked={props.clicked}/>
            <Logo height='80%'/>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>  
            </nav>
        </header>
    )
}

export default toolbar