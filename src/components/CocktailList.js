import React, { useState, useEffect } from 'react';
import '../scss/cocktaillist.scss';
import { Link } from 'react-router-dom';
import '../scss/media_queries.scss';

const CocktailList = (props) => {
    const [list, setList] = useState([])
    useEffect( () => {
    const getAllCocktails = async () => {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
			const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
			const response = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${randomCharacter}`
			);
            const data = await response.json();
            setList(await data.drinks);
		};
		getAllCocktails();
    }, [])
    
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