import React, { useState, useEffect } from 'react';
import './scss/_config.scss';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';
import CocktailCardForm from './components/CocktailCardForm';
import {  Route, Link, Switch } from 'react-router-dom';

function App() {

const [selectedDrink, setSelectedDrink] = useState('');
const [drink, setDrink] = useState('');
const [drinkData, setDrinkData] = useState('margarita');

const handleClick = (drink) => {
  setDrink(drink);
}

const handleSubmit = (bev) => {
  console.log('this is handle submit')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bev}`)
      .then((res) => res.json())
      .then(res => setDrinkData(res.drinks))
}

console.log('this is drinkData', drinkData)

  return (
		<main>
			<div className='App'>
				<nav>
					<ul className='about'>
						<li>
							<Link to='/'>
								<h3>
									Whiskey
									<br />
									Neat
								</h3>
							</Link>
						</li>
						<li>
							<Link to='/about' className='link'>
								about us
							</Link>
						</li>
						<li>
							<Link to='/cocktaillist' className='link'>
								randomizer
							</Link>
						</li>
					</ul>
				</nav>
				<div className='subheader'>
					<p>a react app by hannah catherine trask</p>
				</div>
				<div className='siteName'>
					<h1>Whiskey Neat</h1>
				</div>

				<CocktailForm handleSubmitFromApp={handleSubmit} />
        {/* <CocktailCardForm drinkData={drinkData} /> */}
				<Switch>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/cocktaillist'>
						<CocktailList
							setSelected={(data) => {
								setSelectedDrink(data);
							}}
						/>
					</Route>
					<Route
						path='/cocktaillist/:cocktail'
						render={(routerProps) => (
							<CocktailCard
								{...routerProps}
								handleClick={handleClick}
								drink={selectedDrink}
							/>
						)}
					/>
				</Switch>
			</div>
		</main>
	);
}

export default App;
