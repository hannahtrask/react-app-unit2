import React from 'react';
import './scss/_config.scss';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';
import {  Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
		<main>
			<div className='App'>
				<nav>
					<ul>
						<img src={require('./images/whiskey.png')} alt='whiskeylogo' />
						<Link to='/about'>about us</Link>
						<Link to='/cocktaillist'>cocktail list</Link>
					</ul>
				</nav>
				<Switch>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/cocktaillist'>
						<CocktailList />
					</Route>
				</Switch>
        {/*don't render these on homepage, this is just placeholder stuff*/}
				{/* <CocktailForm />
				<CocktailCard /> */}
			</div>
		</main>
	);
}

export default App;
