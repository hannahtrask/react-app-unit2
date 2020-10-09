import React, { useState } from 'react';
import '../scss/cocktailform.scss';
import '../scss/media_queries.scss';

const CocktailForm = (props) => {
    const [cocktail, setCocktail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmitFromApp(cocktail)
    }
    const handleChange = (e) => {
        e.preventDefault()
        const bev = e.target.value
        setCocktail(bev)
    }

    return (
			<div>
				<div className='desktop'>
					<h3>What'll you have?</h3>
					<p>A resource for inspiration. Type in anything— want a margarita but not sure what spin to put on it? Not sure what you want to drink but know it has a 'B' somewhere in the name? Type anything below and we'll find something tasty for you.</p>
				</div>
				<form onSubmit={handleSubmit}>
					<input
						id='cocktail data'
						type='string'
						value={cocktail}
						onChange={handleChange}
					/>
					<br />
					<input className='submit' type='submit' value='find your cocktail' />
				</form>
			</div>
		);
}

export default CocktailForm;