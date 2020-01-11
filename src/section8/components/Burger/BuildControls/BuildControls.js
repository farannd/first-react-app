import React from 'react'

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const burgerControl = props => {
    let keys = Object.keys(props.ingredients)

    return(
        <div className={styles.BuildControls}>
        <p>Current Price : $ {props.price}</p>
        {keys.map(igKey=>{
            return (
                    <BuildControl
                    igKey = {igKey}
                    key = {igKey}
                    price = {props.ingredients[igKey].price}
                    disable = {props.disable}
                    add = {props.add}
                    remove = {props.remove} />
            )}
        )}
        </div>
    )
}

export default burgerControl