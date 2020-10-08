import React from 'react';
import '../scss/cocktailcardform.scss';
import '../scss/media_queries.scss';

const CocktailCardForm = (props) => {
const drinkArr = props.drinkData



const drinkList = () => {
	if (Array.isArray(drinkArr)) {
		return drinkArr.map((bev) => {
            return (
            <div className='hero-div'>
			<div className='cocktail-card'>
				<img src={bev.strDrinkThumb} className='card' alt='drink image' />
				<div class='container'>
					<h3>your drink:</h3>
					<h5>{bev.strDrink}</h5>
					<br />
					<h6>glassware: {bev.strGlass}</h6>
				</div>
			</div>
			<div className='everything'>
				<div className='ingredients'>
					<p>
						ingredient: {bev.strIngredient1}
						<br />
						amount: {bev.strMeasure1}
					</p>
					<p>
						ingredient: {bev.strIngredient2}
						<br />
						amount: {bev.strMeasure2}
					</p>
					<p>
						ingredient: {bev.strIngredient3}
						<br />
						amount: {bev.strMeasure3}
					</p>
					<p>
						ingredient: {bev.strIngredient4}
						<br />
						amount: {bev.strMeasure4}
					</p>
				</div>
				<div className='instructions'>
					<h4>make it!</h4>
					<p>{bev.strInstructions}</p>
				</div>
			</div>
		</div>
            );
		});
    }
}





	return (
		<div>
            {drinkList()}
		</div>
	);
};

export default CocktailCardForm;
