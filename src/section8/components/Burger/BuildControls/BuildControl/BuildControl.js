import React from 'react'

import styles from './BuildControl.module.css'


const buildControl = props => {

    return (
        <div className={styles.BuildControl}>
            <p className={styles.Label}>{props.igKey}</p>
            <button className={styles.Less} onClick={props.remove.bind(this,props.igKey)}>Less</button>
            <button className={styles.More} onClick={props.add.bind(this,props.igKey)}>More</button>
        </div>
    )
}

export default buildControl