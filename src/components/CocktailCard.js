import React, { useState, useEffect } from 'react';
import '../scss/cocktailcard.scss';

const CocktailCard = (props) => {
	// console.log('this is router props,', props);
	// console.log('this is props.match.params.cocktail,', props.match.params.cocktail);
	// let currentDrink = props.allDrinks.filter( (e) => {
	//     console.log('this is e,', e)
	//     return e
    // })
    
const [currentCocktail, setCurrentCocktail] = useState({})
    
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
					`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentDrink.cocktail}`
                );
                const data = await response.json();
                console.log('this is data', data);
                //this is an object
                console.log('this is data.drinks[0]', data.drinks[0])
                setCurrentCocktail({
                    name: data.drinks[0].strDrink,
                    instructions: data.drinks[0].strInstructions,
                    ingredient1: data.drinks[0].strIngredient1,
                    image: data.drinks[0].strDrinkThumb
                })
                console.log('this is currentDrink', currentDrink)
                //why does this not return the information from above?
                //need this to render card
                console.log('this is currentCocktail', currentCocktail)
            };
            getCurrentDrink()
            
		}, []);
// question: did I properly use the state I declared above?
// how do I take the information from getCurrentDrink() to render below?
    
    

	return (
		<div>
			<h4>your drink</h4>
		</div>
	);
}

export default CocktailCard;