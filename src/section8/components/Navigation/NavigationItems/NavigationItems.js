import React from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = props => {
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem
                linkUrl='#'
                active>
                    Burger Builder
            </NavigationItem>
            <NavigationItem
                linkUrl='#'>
                    Checkout
            </NavigationItem>
        </ul>
    )
}

export default navigationItems