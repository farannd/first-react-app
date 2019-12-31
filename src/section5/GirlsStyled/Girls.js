import React from 'react'
import styled from 'styled-components'

//pembuatan customize tags dalam styled-component
const StyledDiv = styled.div`
    background-color: pink;
    margin: 10px auto;
    width: 70%;
`

const Girls = props => {
    const style = {
        '@media (max-width: 500px)': {
            width:'450px'
        }
    }
    return(
        // pemanggilan customize tag
        <StyledDiv>
            <h2>Girls</h2>
            <img src={props.img} alt="img" onClick={props.delete} style={style}/>
            <p>{props.name}</p>
            <input type="text" onChange={props.change} placeholder="change name"></input>
        </StyledDiv>
    )
}

export default Girls