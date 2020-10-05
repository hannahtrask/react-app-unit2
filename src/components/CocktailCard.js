import React, { useState } from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {
	console.log('this is router props,', props);
	console.log('this is props.match.params.cocktail,', props.match.params.cocktail);
	// let currentDrink = props.allDrinks.filter( (e) => {
	//     console.log('this is e,', e)
	//     return e
	// })

//fetch call to get all drinks. then filter through that array to set currentDrink
	//another fetch for data.....
	//after fetch, filter
	//pull from https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

	return (
		<div>
			<h4>this is the cocktail card page</h4>
		</div>
	);
}

export default CocktailCard;