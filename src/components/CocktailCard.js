import React, { useState, useEffect } from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {
	console.log('this is router props,', props);
	console.log('this is props.match.params.cocktail,', props.match.params.cocktail);
	// let currentDrink = props.allDrinks.filter( (e) => {
	//     console.log('this is e,', e)
	//     return e
    // })
    
const [currentDrink, setCurrentDrink] = useState('')
    
//the idea here is that we get the currentDrink data from the click, and then call the cocktailDB api to match the name of the drink to a search, and then render those on the page
//right now have a fetch set up
//not sure why data is coming back null
//this is the roadblock!

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
                //this comes out null for some reason
                //once I can get this I can render everything on the page from the drink randomizer list
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