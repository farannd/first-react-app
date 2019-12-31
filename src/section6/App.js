import React, {Component} from 'react'
import Girls from './Girls/Girls'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component{
    state = {
        isClicked: false,
        girls : [
            {
                name: 'Nagyung',
                img: 'https://i.pinimg.com/originals/94/32/80/943280761e35bd8cdc9489d2eb2dbde1.jpg'
            },
            {
                name: 'Yuri',
                img: 'https://i.pinimg.com/originals/c9/93/28/c993288f1c9c29282ffe1eb9129b93b1.jpg'
            }

        ]
    }

    clickHandler = event => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        let show = ''
        if(this.state.isClicked){
            show = (
                <div>
                    {this.state.girls.map((event,index)=>{
                        return(
                            //karena ErrorBoundary merupakan high order component yang maksud nya component yang me wrap another component
                            //maka key harus ada di outer component yaitu Error Boundary 
                            <ErrorBoundary key={index}>
                                <Girls
                                name={event.name}
                                img={event.img}
                                />
                            </ErrorBoundary>
                            
                        )
                    })}
                </div>
            )
        }
        return(
            <div>
                <h1>Section 6, Error Boundary</h1>
                <button onClick={this.clickHandler}>
                    Click Me!
                </button>
                {show}
            </div>
        )
    }
}

export default App

