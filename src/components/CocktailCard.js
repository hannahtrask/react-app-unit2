import React from 'react';
import '../scss/cocktailcard.scss';
import '../scss/media_queries.scss';

const CocktailCard = (props) => {
    
const { drink } = props


	return (
		<div className='cocktail-card'>
			<h3>your drink:</h3>
			<h5>{drink.strDrink}</h5>
            <br/>
			<h6>glassware: {drink.strGlass}</h6>
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