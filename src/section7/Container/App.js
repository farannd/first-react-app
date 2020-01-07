import React from 'react'

import AuthContext from '../context/auth-context'
import Aux from '../hoc/Auxiliary/Auxiliary'
import withClasses from '../hoc/withClasses/withClasses'
import Cockpit from '../Components/Cockpit/Cockpit'
import Girls from '../Components/Girls/Girls'
import classes from './App.module.css'

class App extends React.Component {
    //method yang akan otomatis dipanggil ketika class App digunakan
    constructor(props){
        //dalam class based hrs memanggil super(props) untuk dpt memanggil class child contructor
        super(props)
        console.log('[App.js] constructor')
    }

    state = {
        authenticate: false,
        showGirls : false,
        showCockpit: true,
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

    //method yang berfungsi untuk merubah nilai state dari props
    static getDerivedStateFromProps(props,state){
        console.log('[App.js] getDerivedFromProps')
        return state
    }

    //method yang berfungsi untuk melakukan sesuatu yg biasanya http request setelah component ter mount
    componentDidMount(){
        console.log('[App.js] component did mount')
    }

    //show girls
    clickHandler = () => {
        this.setState({
            showGirls : !this.state.showGirls
        })
    }

    //show cockpit
    clickHandlerCockpit = () => {
        this.setState({
            showCockpit: !this.state.showCockpit
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

    //login handler dg context
    loginHandler = () => {
        this.setState({
            authenticate: !this.state.authenticate
        })
    }
    
    render(){
        console.log('[App.js] render')
        // javascript way conditional
        let show = null;
        if(this.state.showGirls){
            show = (
                <Girls
                    girls={this.state.girls}
                    delete={this.deleteClickHandler}
                    change={this.changeInputHandler}/>
            )
        }

        return(
            <Aux>
                <button onClick={this.clickHandlerCockpit}> Show Cockpit</button>
                <AuthContext.Provider
                    value={{
                        authenticate:this.state.authenticate, 
                        login: this.loginHandler}}>

                    {this.state.showCockpit ?
                    <Cockpit
                        showCockpit={this.clickHandlerCockpit}
                        showGirls={this.clickHandler}
                        state={this.state} />
                        : null
                    }
            
                    {/* Javascript Way Conditional */}
                    {show}
                </AuthContext.Provider>

            </Aux>
        )
    }
}

export default withClasses(App, classes.body)