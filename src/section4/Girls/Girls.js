import React from 'react'

const Girls = props => {
    return(
        <div>
            <h2>Girls</h2>
            <img src={props.img} alt="img" onClick={props.delete}/>
            <p>{props.name}</p>
            <input type="text" onChange={props.change} placeholder="change name"></input>
        </div>
    )
}

export default Girls