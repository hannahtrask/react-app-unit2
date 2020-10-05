import React from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {

console.log('this is router props,', props)
console.log('this is props.match.params,', props.match.params)
// let currentDrink = props.allDrinks.filter( (e) => {
//     console.log('this is e,', e)
//     return e
// })

//another fetch for data.....


    return (
        <div>
            <h4>this is the cocktail card page</h4>
        </div>
    )
}

export default CocktailCard;