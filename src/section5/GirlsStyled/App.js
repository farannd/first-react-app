import React from 'react'
import styled from 'styled-components'
import Person from '../Person/Person'
import Girls from './Girls'
import './App.css'

//pembuatan customize tags dalam styled-component
const StyledButton = styled.button`
    background-color: ${props => props.argument ? 'salmon' : 'green' };
    color: pink;
    padding: 8px;
    border: 1px solid black;

    &:hover{
        background-color: ${props => props.argument ? 'red' : 'lightgreen' };
        color: pink;
    }
`

class App extends React.Component {

    state = {
        isLoggedIn : true,
        isClicked : false,
        girls: [
            {
                id: 'asdkjfn',
                name: "nagyung",
                img: "https://data.whicdn.com/images/333569720/original.jpg"
            },
            {
                id: 'asdw',
                name: "rose",
                img: "https://lh3.googleusercontent.com/Cemshv5lxKe5Nipynz7UdagOq7IEzkKovoggRFbMdAhm0yGqQAcfiIH7iy09UxKkjCU-v6U7xLq92ES7xACgORanDNK7qEQz9A=w1600-rj"
            }
        ]
    }

    clickHandler = () => {
        this.setState({
            isClicked : !this.state.isClicked
        })
    }

    //update elemen list
    changeInputHandler = (event,id)=>{
        //untuk mencari index elemen yang akan diubah
        const girlIndex = this.state.girls.findIndex(p => {
            return p.id === id
        })

        //array dalam JS merupakan reference type shg untuk mengcopy nilai data array harus menggunakan spread operator
        const girls = [...this.state.girls]

        girls[girlIndex].name = event.target.value

        this.setState({
            girls:girls
        })
    }

    // delete elemen list
    deleteClickHandler = (index) => {
        const girls = [...this.state.girls]
        //untuk mendelete data index elemen tanpa membuat index array menjadi kosong
        girls.splice(index,1);
        this.setState({
            girls : girls
        })
    }

    render(){
        //inline style
        const style = {
            backgroundColor: 'green',
            padding: '5px',
            curson: 'pointer',
        }

        // javascript way conditional
        let show = null;
        if(this.state.isClicked){
            show = (
                <div>
                    {/* React list yang berfungsi untuk code menjadi DRY */}
                    {this.state.girls.map( (girl,index) => {
                        return(
                            <Girls
                                name={girl.name}
                                img={girl.img}
                                key={girl.id}
                                delete={this.deleteClickHandler.bind(this,index)} 
                                change={(event => this.changeInputHandler(event,girl.id))} />
                        )
                    })}
                </div>
            )
            // Dynamic style dengan inline style
            style.backgroundColor = 'red'
        }

        //Dynamic style dengan stylesheet
        const styleSheet = [];
        if(this.state.girls.length<=1){
            styleSheet.push('pink');
        }

        return(
            <div className="App App-head">
                <h1 className={styleSheet}>React App</h1>
                {/* INLINE CONDITIONAL */}
                {
                    this.state.isLoggedIn === true ?
                        <Person />
                    : <h2>Nadiyah Sayang</h2>
                }

                <StyledButton argument={this.state.isClicked} onClick={this.clickHandler}>
                    Click Me!
                </StyledButton>

                {/* Javascript Way Conditional */}
                {show}
            </div>
        )
    }
}

export default App