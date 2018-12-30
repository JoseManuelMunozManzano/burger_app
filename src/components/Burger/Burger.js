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
    // 4. Para saber si es un array vacío:
    //    Sobre el resultado final se aplica reduce, que permite transformar un 
    //    array en otra cosa. Toma como entrada una función con dos parámetros,
    //    el valor previo y el valor actual. También acepta un valor inicial, 
    //    que en este caso será un array vacio.
    //    Por ejemplo cheese: 2 se transformará en (2) [{...}, {...}] de props: {type cheese}
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
    if (transformedIngredients.length === 0) {   
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;