import React from 'react';
import './scss/_config.scss';
import Nav from './components/Nav';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailForm from './components/CocktailForm';
import CocktailCard from './components/CocktailCard';

function App() {
  return (
		<main>
			<div className='App'>
        <Nav />
        <About />
        <CocktailList />
        <CocktailForm />
        <CocktailCard />
			</div>
		</main>
	);
}

export default App;
