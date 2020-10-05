import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import '../scss/cocktaillist.scss';
import { Link } from 'react-router-dom';

const CocktailList = () => {

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
            console.log('this is data.drinks,', data.drinks)
		};

		getAllCocktails();
    }, [])

    //maps over all drinks in array, returns a list, this only covers drinks starting with 'a'
    const allDrinks = list.map ( (bev) => {
        return (
					<Link to={'/cocktaillist/' + bev.strDrink}>
						<p>{bev.strDrink}</p>
					</Link>
				);
    })

    //this useState is to set which drink is clicked on on the cocktail list
    const [selectedDrink, setSelectedDrink] = useState('');

    //handle the click on the cocktail name
    //all this does is return an image of the drink
    const handleClick = (e) => {
        // console.log('this is e.target.innerText, in handleClick', e.target.innerText)
        let singleCocktail = list.filter( (drink) => {
            return drink.strDrink === e.target.innerText;
        })
        setSelectedDrink(singleCocktail[0].strDrink)
    }

    console.log('this is selected drink', selectedDrink)


    return (
			<div>
				<h3>cocktail list</h3>
				{/* <form>
                    <input val='string' placeholder='type in a letter...'></input>
                </form> */}
				<li onClick={handleClick}>{allDrinks}</li>
			</div>
		);
}

export default CocktailList;