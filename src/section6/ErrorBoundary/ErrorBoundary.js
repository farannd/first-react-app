import React, {Component} from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //method dari Component package yang 
    //berfungsi untuk menangkap suatu component yang di wrap dg error boundary tag dan mengalami kesalahan
    //lalu mengeksekusi baris kode di dalam method ini
    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>{this.state.errorMessage}</h1>
                </div>
            )
        } else {
            //component yang terwrap dg error boundary
            return this.props.children
        }

    }
}

export default ErrorBoundary