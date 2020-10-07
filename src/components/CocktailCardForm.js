import React from 'react';
import '../scss/cocktailcard.scss';
import '../scss/media_queries.scss';

const CocktailCardForm = (props) => {

// console.log('this is props.drinkData.drinks', props.drinkData.drinks)

// let drinkArr = props.drinkData.drinks;

// console.log(drinkArr)

console.log('this is props', props.drinkData)

const drinkArr = props.drinkData

console.log('this is drinkArr', drinkArr)



const drinkList = () => {
	if (Array.isArray(drinkArr)) {
		return drinkArr.map((bev) => {
            return (
            <h1>{bev.strDrink}</h1>
            
            );
		});
    }
}


	return (
		<div className='cocktail-card'>
            <h4>{drinkList()}</h4>
		</div>
	);
};

export default CocktailCardForm;
