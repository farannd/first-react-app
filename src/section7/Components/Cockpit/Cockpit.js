import React, {useEffect, useContext} from 'react'

import AuthContext from '../../context/auth-context'
import classes from './Cockpit.module.css'

const Cockpit = props => {
    //context
    const context = useContext(AuthContext)
    console.log(context)

    //merupakan metode lifecycle dari react hooks
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect')
        return () => {
            console.log ('[Cockpit.js] cleaning up')
        }
    },[])

    //dynamic style CSS module
    const dynamicMod = [classes.button]
    if(props.state.showGirls){
        dynamicMod.push(classes.red)
    }

    //Dynamic style dengan stylesheet
    let styleSheet = [];
    if(props.state.girls.length<=1){
        styleSheet.push(classes.pink);
    }
    if(props.state.girls.length === 0 ){
        styleSheet.push(classes.black)
    }

    return(
        <div>
                <h1 className={styleSheet.join(" ")}>React App</h1>
                <button className={dynamicMod.join(" ")} onClick={props.showGirls}>
                    Show Girls
                </button>
                <button className={classes.button} onClick={context.login}>Login</button>
        </div>
    )
}

//React.memo berfungsi untuk mengecek perbubahan state atau props untuk melakukan re render
export default React.memo(Cockpit)