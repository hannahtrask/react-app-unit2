import React, { useState, useEffect } from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {
	// console.log('this is router props,', props);
	// console.log('this is props.match.params.cocktail,', props.match.params.cocktail);
	// let currentDrink = props.allDrinks.filter( (e) => {
	//     console.log('this is e,', e)
	//     return e
    // })
    
const { drink } = props
    


//use a ternary in the return below.. this will help you determine whether or not you need to display an ingredient or measure

	return (
		<div>
			<h4>your drink</h4>
			<p>{drink.strDrink}</p>
			<h5>glassware: {drink.strGlass}</h5>
			<p>
				ingredient: {drink.strIngredient1} 
                <br />
				amount: {drink.strMeasure1} 
			</p>
			<p>
				ingredient: {drink.strIngredient2}
                <br />
				amount: {drink.strMeasure2} 
			</p>
			<p>
				ingredient: {drink.strIngredient3}
                <br /> 
				amount: {drink.strMeasure3} 
			</p>
			<p>
				ingredient: {drink.strIngredient4} 
                <br />
				amount: {drink.strMeasure4} 
			</p>
			<h4>make it!</h4>
			<p>{drink.strInstructions}</p>
			<img src={drink.strDrinkThumb} className='card' />
		</div>
	);
    

}

export default CocktailCard;