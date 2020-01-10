import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        price: {
            salad: 0.25,
            bacon: 1,
            cheese: 0.75,
            meat: 1.25
        }
    }

    addIngredientsHandler = type => {
        let newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] += 1

        let newPrice = this.state.totalPrice + this.state.price[type]

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        })
    }

    removeIngredientsHandler = type => {
        let newIngredients = {
            ...this.state.ingredients
        }

        let newPrice = this.state.totalPrice;

        if(newIngredients[type]>0){
            newIngredients[type] -= 1
            newPrice = this.state.totalPrice - this.state.price[type]
        }
    
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        })
    }


    render(){
        return(
            <Aux>
                <Burger
                    ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredients = {this.state.ingredients}
                    price = {this.state.totalPrice}
                    add = {this.addIngredientsHandler}
                    remove = {this.removeIngredientsHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder