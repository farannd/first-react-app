import React from 'react'

import styles from './Hamburger.module.css'

const hamburger = props => {
    return(
        <div onClick={props.clicked} className={styles.Hamburger}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default hamburger