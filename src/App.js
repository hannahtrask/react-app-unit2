import React, { useState } from 'react';
import './scss/_config.scss';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';
import {  Route, Link, Switch } from 'react-router-dom';

function App() {

const [selectedDrink, setSelectedDrink] = useState('');
const [drink, setDrink] = useState('')
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
					<p>
						a react app by hannah catherine trask
					</p>
				</div>
				<h1>Whiskey Neat</h1>

				<CocktailForm handleSubmitFromApp={handleSubmit} />
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
