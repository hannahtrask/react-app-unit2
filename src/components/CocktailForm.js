import React, { useState } from 'react';
import '../scss/cocktailform.scss';

const CocktailForm = (props) => {

    const [cocktail, setCocktail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handle submit in form clicked')

        props.handleSubmitFromApp(cocktail)
    }

    const handleChange = (e) => {
        e.preventDefault()
        console.log('this is the handle change in form')
        const bev = e.target.value
        setCocktail(bev)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id='cocktail data'
                        type='string'
                        value={cocktail}
                        onChange={handleChange}
                        />
                        <br />
                <input className='submit' type='submit' value='find your cocktail' />
            </form>
        </div>
    )
}

export default CocktailForm;