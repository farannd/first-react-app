import React from 'react'

import Aux from '../../../hoc/Auxiliary'
import styles from './Button.module.css'

const button = props => {
    let styleNames = [styles.Button]
    styleNames.push(styles[props.styleName])
    return(
        <Aux>
            <button 
                className = {styleNames.join(' ')}
                onClick = {props.clicked}>{props.children}</button>
        </Aux>
    )
}

export default button