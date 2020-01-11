import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: {
                count: 0,
                price: 0.25
            },
            bacon: {
                count: 0,
                price: 1
            },
            cheese: {
                count: 0,
                price: 0.75
            },
            meat: {
                count: 0,
                price: 1.25
            },
        },
        totalPrice: 4,
    }

    addIngredientsHandler = type => {
        let newIngredients = JSON.parse(JSON.stringify(this.state.ingredients))
        newIngredients[type].count += 1

        let newPrice = this.state.totalPrice + newIngredients[type].price

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        })
    }

    removeIngredientsHandler = type => {
        let newIngredients = JSON.parse(JSON.stringify(this.state.ingredients))

        let newPrice = this.state.totalPrice;

        if(newIngredients[type].count>0){
            newIngredients[type].count -= 1
            newPrice -= newIngredients[type].price
        }
    
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        })
    }

    render(){
        const disable = JSON.parse(JSON.stringify(this.state.ingredients))
        for(let key in disable){
            if (disable[key].count === 0) disable[key].count = true
            else disable[key].count = false
        };

        return(
            <Aux>
                <Burger
                    ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredients = {this.state.ingredients}
                    price = {this.state.totalPrice}
                    disable = {disable}
                    add = {this.addIngredientsHandler}
                    remove = {this.removeIngredientsHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder