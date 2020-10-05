import React, { useState, useEffect } from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {
	console.log('this is router props,', props);
	console.log('this is props.match.params.cocktail,', props.match.params.cocktail);
	// let currentDrink = props.allDrinks.filter( (e) => {
	//     console.log('this is e,', e)
	//     return e
    // })
    

    

//should grab data about current drink in the api but for whatever reason is coming back null
//ask instructor with token
    useEffect(() => {
			const getCurrentDrink = async () => {
                let currentDrink = props.match.params;
                console.log('this is current drink', currentDrink)
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentDrink}`
				);
				const data = await response.json();
				console.log('this is data', data);
            };
            getCurrentDrink()
		}, []);

    
    
    

	return (
		<div>
			<h4>your drink</h4>
		</div>
	);
}

export default CocktailCard;