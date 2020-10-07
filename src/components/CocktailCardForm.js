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


// //use token
// //here tried to deal with drinkList.map is not a function
// //however can only save this to function?
// const drinkList = () => {
// 	if (Array.isArray(drinkArr)) {
// 		drinkArr.map((bev) => {
// 			return <h1>{bev.strDrink}</h1>;
// 		});
//     }
// }

// //this turns up an error drinkList.map() is not a function
// const fullDrinkList = drinkArr.map( (bev) => {
//     if (Array.isArray(drinkArr)){
//  return <h1>{bev.strDrink}</h1>;
//     }
   
// })


// console.log('this is drinkList', fullDrinkList)

	return (
		<div className='cocktail-card'>
            <h4>card</h4>
		</div>
	);
};

export default CocktailCardForm;
