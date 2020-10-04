import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import '../scss/cocktaillist.scss';

const CocktailList = () => {

    //sets state for list of cocktails.
    const [list, setList] = useState([])

    // //all alphabet
    // const alphabetArr = [
	// 		'a',
	// 		'b',
	// 		'c',
	// 		'd',
	// 		'e',
	// 		'f',
	// 		'g',
	// 		'h',
	// 		'i',
	// 		'j',
	// 		'k',
	// 		'l',
	// 		'm',
	// 		'n',
	// 		'o',
	// 		'p',
	// 		'q',
	// 		'r',
	// 		's',
	// 		't',
	// 		'u',
	// 		'v',
	// 		'w',
	// 		'x',
	// 		'y',
	// 		'z',
    //     ];
        
    //     const allLetters = alphabetArr.reduce()

    //fetch API call
    //grabs all cocktails
    useEffect( () => {
    const getAllCocktails = async () => {
			const response = await fetch(
                //this is only cocktails starting with b, ask about how to go a-z (with token????)
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b`
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
            <p>{bev.strDrink}</p>
        )
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
				<li onClick={handleClick}>{allDrinks}</li>
                {/* passing jpg image of selected drink as props */}
                <CocktailCard url={selectedDrink} />
			</div>
		);
}

export default CocktailList;