import React from 'react'
import style from './App.module.css'


const Girls = props => {

    return(
        // pemanggilan customize tag
        <div className={style.pink}>
            <h2>Girls</h2>
            <img src={props.img} alt="img" onClick={props.delete} style={style}/>
            <p>{props.name}</p>
            <input type="text" onChange={props.change} placeholder="change name"></input>
        </div>
    )
}

export default Girls