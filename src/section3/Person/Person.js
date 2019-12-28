import React from 'react'

//Merupakan child component yang akan dipanggil dalam parent component
const Person = (props) =>{
    return(
        <div>
            <p onClick={props.click}>
                Name: {props.name}, Status: {props.status}
            </p>
            <input type="text" onChange={props.change} placeholder="input name"></input>
        </div>
    )
}

export default Person;