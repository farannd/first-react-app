import React, {Component} from 'react'
import classes from './Girl.module.css'

//merupakan component child yang berfungsi untuk membuat suatu component tertentu
class Girl extends Component {
    render(){
        console.log('[Girl.js] is rendering ..')
        return(
            <div className={classes.div}>
                <h2>Girls</h2>
                <img src={this.props.img} alt="img" onClick={this.props.delete}/>
                <p>{this.props.name}</p>
                <input type="text" onChange={this.props.change} placeholder="change name"></input>
            </div>
        )
    }
}

export default Girl