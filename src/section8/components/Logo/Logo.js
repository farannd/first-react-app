import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

const logo = props => (
    <div className={styles.Logo} style={{height: props.heigth}}>
        <img src={burgerLogo} alt='MyBurger'/>
    </div>
)

export default logo