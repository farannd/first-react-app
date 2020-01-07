import React, {PureComponent} from 'react'

import Girl from './Girl/Girl'

//component ini berfungsi untuk membuat list dari component child nya yaitu Girl
class Girls extends PureComponent {
    state = {
        dumbState: ''
    }

    static getDerivedStateFromProps(props,state){
        console.log('[Girls.js] getDerivedStateFromProps')
        return state
    }

    //method yang berfungsi untuk menentukan apakan component harus di update atau tidak
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Girls.js] shouldComponentUpdate')
    //     if(nextProps.girls !== this.props.girls){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // KARENA MENGGUNAKAN PureComponent maka method ini tidak perlu ditulis 
    //krn PureComponent sudah memiliki fungsi ini yang bekerja secara otomatis 
    //untuk mengecek semua perubahan props yang ada

    //method yang berfungsi untuk menyimpan data props dan state yang sebelum diupdate
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Girls.js] getSnapShotBeforeUpdate')
        return null
    }

    //method yang berfungsi untuk memberikan perintah setelah component di update
    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('[Girls.js] componentDidUpdate')
        return null
    }

    //method yang berfungsi untuk cleaning up component ketika component di unmount
    componentWillUnmount(){
        console.log('[Girls.js] componentWillUnmount')
    }

    render(){
        console.log('[Girls.js] is rendering ..')
        return(
            this.props.girls.map( (girl,index) => {
                return(
                    <Girl
                        name={girl.name}
                        img={girl.img}
                        key={girl.id}
                        delete={this.props.delete.bind(this,index)} 
                        change={(event => this.props.change(event,girl.id))} />
                )
            })
        )
    }
}

export default Girls