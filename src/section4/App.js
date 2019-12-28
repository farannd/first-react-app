import React from 'react'
import Person from './Person/Person'
import './App.css'

class App extends React.Component {

    state = {
        isLoggedIn : true
    }

    render(){
        return(
            <div className="App App-head">
                <h1>React App</h1>
                {/* INLINE CONDITIONAL */}
                {
                    this.state.isLoggedIn === true ?
                        <Person />
                    : <h2>Nadiyah Sayang</h2>
                }   
            </div>
        )
    }
}

export default App