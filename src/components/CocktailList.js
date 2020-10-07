import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import '../scss/cocktaillist.scss';
import { Link } from 'react-router-dom';
import '../scss/media_queries.scss';

const CocktailList = (props) => {

    //sets state for list of cocktails.
    const [list, setList] = useState([])


    //fetch API call
    //grabs all cocktails
    useEffect( () => {
    const getAllCocktails = async () => {
        //will select a random character from alphabet string
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
			const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
			const response = await fetch(
                //this is only a randomly selected letter
                //maybe build a way to select a letter and it'll render them all?
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${randomCharacter}`
			);
            const data = await response.json();
            setList(await data.drinks);
            // console.log('this is data.drinks,', data.drinks)
		};

		getAllCocktails();
    }, [])


    //maps over all drinks in array, returns a list, this only covers drinks starting with 'a'
    
    const allDrinks = list.map ( (bev) => {
        console.log(bev)
        return (
					<li onClick={() => {
                        props.setSelected(bev)
                    }}>
						<Link to={'/cocktaillist/' + bev.strDrink}>
							<h5>{bev.strDrink}</h5>
						</Link>
					</li>
				);
    })





    return (
			<>
				<div className='section'>
					<div className='title'>
						<h3>The Randomizer</h3>
						<br />
						<h4>Pick a drink. Learn its specs.</h4>
						<h4>Refresh the page. Get inspired.</h4>
					</div>
					<ul className='random'>{allDrinks}</ul>
				</div>
				<br />
				<div className='section-footer'>
                </div>
			</>
		);
}

export default CocktailList;