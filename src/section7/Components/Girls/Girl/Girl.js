import React, {Component} from 'react'

import AuthContext from '../../../context/auth-context'
import PropTypes from 'prop-types'
import WithClass from '../../../hoc/WithClass/WithClass'
import classes from './Girl.module.css'

//merupakan component child yang berfungsi untuk membuat suatu component tertentu
class Girl extends Component {
    constructor(props){
        super(props)
        this.inputElRef = React.createRef();
    }

    //context
    static contextType = AuthContext;

    componentDidMount(){
        console.log(this.context)
        console.log(this.inputElRef)
        this.inputElRef.current.focus();
    }

    render(){
        console.log('[Girl.js] is rendering ..')
        return(
            <WithClass classes={classes.div}>
                {this.context.authenticate? <p>Authenticated</p> : <p>Login</p>}
                <h2>Girls</h2>
                <img 
                    src={this.props.img} 
                    alt="img" 
                    onClick={this.props.delete}/>
                <p>{this.props.name}</p>
                <input 
                    ref={this.inputElRef}
                    type="text"     
                    onChange={this.props.change} 
                    value={this.props.name} />
            </WithClass>
        )
    }
}

Girl.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func
}

export default Girl