import React from 'react'
import Radium from 'radium'

const Girls = props => {
    const style = {
        '@media (max-width: 500px)': {
            width:'450px'
        }
    }
    return(
        <div style={style}>
            <h2>Girls</h2>
            <img src={props.img} alt="img" onClick={props.delete} style={style}/>
            <p>{props.name}</p>
            <input type="text" onChange={props.change} placeholder="change name"></input>
        </div>
    )
}

export default Radium(Girls)