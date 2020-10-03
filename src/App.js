import React from 'react';
import './scss/_config.scss';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';

function App() {
  return (
		<main>
			<div className='App'>
				<nav>
					<ul>
						<img src={require('./images/whiskey.png')} alt='whiskeylogo' />
						<h4>about us</h4>
						<h4>cocktail list</h4>
					</ul>
				</nav>
				<About />
				<CocktailList />
				<CocktailForm />
				<CocktailCard />
			</div>
		</main>
	);
}

export default App;
