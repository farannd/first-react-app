import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'


const burger = props => {
    console.log(props.ingredients)

    //untuk membuat array yang berisikan nilai key dari object
    const transformedIngredients= Object.keys(props.ingredients)
    console.log(transformedIngredients);

    //untuk membuat array yang didalam nya terdapat array yang memiliki jumlah elemen sesuai 
    //dengan jumlah yang ditentukan dari object ingredient (misal meat:2, maka akan membuat array berjumlah 2, [[2], ..])
    let result = transformedIngredients.map(igKey=>{
        //untuk membuat array
        let result = [...Array(props.ingredients[igKey].count)]
        console.log(result)
        return result.map((_,index)=>{
            let result = <BurgerIngredient key={igKey + index} types={igKey} />
            console.log(result)
            return result
        })
    })
    console.log(result);

    // reduce berfungsi untuk membuat suatu array menjadi satu value
    // concat berfungsi untuk menggabungkan nilai dari dua array
    let condition = result.reduce((first,rest)=>first.concat(rest))
    console.log(condition);

    //berfungsi untuk mengecek apakah ingredient ada atau tidak
    if(condition.length===0){
        result = <p>Please input some ingredients</p>
    }
    
    return(
        <div className={styles.Burger}>
            <BurgerIngredient types='bread-top' />
            {result}
            <BurgerIngredient types='bread-bottom' />
        </div>
    )
}

export default burger