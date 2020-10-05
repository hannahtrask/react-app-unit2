import React, { useState } from 'react';
import './scss/_config.scss';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';
import {  Route, Link, Switch } from 'react-router-dom';

function App() {
//handles drink click sent down to cocktail card in routerprops
const [drink, setDrink] = useState('')
//sets drink to whichever clicked on
const handleClick = (drink) => {
  setDrink(drink);
}


const handleSubmit = () => {
  console.log('this is handle submit')
}







  return (
		<main>
			<div className='App'>
				<nav>
					<ul>
						<Link to='/'>
							<img src={require('./images/whiskey.png')} alt='whiskeylogo' />
						</Link>
						<Link to='/about'>about us</Link>
						<Link to='/cocktaillist'>cocktail list</Link>
					</ul>
				</nav>
				<h1>whiskey neat</h1>
        <CocktailForm handleSubmitFromApp={handleSubmit} />
				<Switch>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/cocktaillist'>
						<CocktailList />
					</Route>
					<Route
						path='/cocktaillist/:cocktail'
						/*this will pass in all that fun routerProps stuff along with handleclick, which will manage clicking on*/
						/*the individual stocks, and will also pass the stock value from the useState instantiated above*/
						render={(routerProps) => (
							<CocktailCard {...routerProps} handleClick={handleClick} />
						)}
					/>
				</Switch>
				{/*don't render these on homepage, this is just placeholder stuff*/}
				{/* <CocktailForm />
				<CocktailCard /> */}
			</div>
		</main>
	);
}

export default App;
