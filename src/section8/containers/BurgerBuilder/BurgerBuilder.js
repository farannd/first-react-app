import React, {Component} from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalCount: true,
        purchasing: false
    }

    addIngredientsHandler = type => {
        let newIngredients = JSON.parse(JSON.stringify(this.state.ingredients))
        newIngredients[type].count += 1

        let newPrice = this.state.totalPrice + newIngredients[type].price

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        })

        this.orderHandler(newIngredients)
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
        this.orderHandler(newIngredients)
    }

    orderHandler = ingredients => {
        let newOrder = null
        for (let key in ingredients){
            newOrder = newOrder + ingredients[key].count
        }
        if(newOrder<= 0) {
            this.setState({
                totalCount: true
            })
        } else {
            this.setState({
                totalCount: false
            })
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('Continue')
    }

    render = () => {
        const disable = JSON.parse(JSON.stringify(this.state.ingredients))
        for(let key in disable){
            if (disable[key].count === 0) disable[key].count = true
            else disable[key].count = false
        };

        return(
            <Aux>
                <Modal 
                    show = {this.state.purchasing}
                    cancelOrder = {this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients = {this.state.ingredients}
                        price = {this.state.totalPrice}
                        cancelOrder = {this.purchaseCancelHandler}
                        continueOrder = {this.purchaseContinueHandler}/>
                </Modal>
                <Burger
                    ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredients = {this.state.ingredients}
                    price = {this.state.totalPrice}
                    disableIngredient = {disable}
                    disableOrder = {this.state.totalCount}
                    add = {this.addIngredientsHandler}
                    remove = {this.removeIngredientsHandler}
                    orderPurchase = {this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder