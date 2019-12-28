import React from "react";
import Person from "./Person/Person"
import './App.css'

class App extends React.Component{

  //State yang merupakan property yang ada dalam component itu sendiri
  state = ({
    description:[
      {
        name: 'nadiyah',
        status: 'mine'
      },
      {
        name: 'athirah',
        status: 'ex'
      },
    ]
  })

  //handler method yang berfungsi untuk mengatur event yang terjadi
  buttonHandler = (newName) => {
    this.setState({
      description:[
        {
          name: newName,
          status: 'mine'
        },
        {
          name: 'athirah',
          status: 'ex'
        },
      ]
    })
  }
  inputHandler = (event) => {
    this.setState({
      description:[
        {
          name: event.target.value,
          status: 'mine'
        },
        {
          name: 'athirah',
          status: 'ex'
        },
      ]
    })
  }

  
  //render method dari React.component berfungsi untuk meng compile baris code yang akan ditampilkan ke layar
  //dan return yang memiliki fungsi merubah baris code JSX ke React.createElement()
  render(){
    return(
      <div className="App App-header" change={this.inputHandler}>
        <h1>React App</h1>
        <button onClick={this.buttonHandler.bind(this,'athirah')}>Click Me</button>
        <Person 
          name={this.state.description[0].name} 
          status={this.state.description[0].status}
          click={this.buttonHandler.bind(this,'athirah')}
          change={this.inputHandler} />
        <Person 
          name={this.state.description[1].name} 
          status={this.state.description[1].status} />
      </div>
    )
  }
}

export default App;