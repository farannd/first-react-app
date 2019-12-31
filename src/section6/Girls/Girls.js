import React from 'react'
import classes from './Girls.module.css'

const Girls = props => {
    return(
        <div className={classes.div}>
            <p>{props.name}</p>
            <img className={classes.img} src={props.img} alt="girls"/>
        </div>
    )
}

export default Girls;