import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // Convert an object of key-vale pairs into an array of the values of the ingredients
    // where the value of that object is important to decide how many ingredients I need 
    // and the keys are important for which type of ingredient I need.
    // 1. Obtenemos un array de los keys ["salad", "bacon", "cheese", "meat"]
    // 2. Hacemos un map (ejecuta una función) sobre esos elementos del array
    //    en el que se transformará ese string en un array con tantos elementos como
    //    ingredientes tenemos para un ingrediente dado. 
    //    Por ejemplo cheese: 2 se transformará en ["cheese", "cheese"]
    // 3. Interno al map se ejecutará otro map sobre el índice de los elementos, y
    //    devolveremos el jsx BurgerIngredient
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;