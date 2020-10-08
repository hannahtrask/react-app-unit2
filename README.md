# Cocktail App

## Project links

 - [Github project link](https://github.com/hannahtrask/react-app-unit2)
 - [Live project link](https://hannahscocktailapp.netlify.app/)

## Project Description

For my Unit 2 project, I'll be building an app where you can search cocktails by their main liquor ingredient or name. By searching in a form, you can pull up a card with the cocktail image, a short description, and a list of ingredients in each of the drinks. The idea is that there will be a place you can go to either peruse a list of cocktails or search for a specific cocktail. Some cocktails have different iterations, and each search will show every iteration of it's own cocktail on each card.

## Project Styling

The general theme of my App will be Old American West. I want the viewer to feel like they've teleported back in time to a saloon on the side of a railway, but in a classy way. Think Prohibition Era cocktail bar mixed with Wild West saloon.

I chose the below palette for this project. I want to represent the darker colors associated with the cool, dark lighting you often find in a cocktail bar. The dominating color scheme will be dark with some splashes of color here and there. The idea is to feel like you're in a trendy place while you look up trendy cocktails!
- [Color Palette](https://coolors.co/15181d-183642-575a60-9d4827-ce5f55-e3a767-ed9d48-ebe0d6)

I chose two typefaces for this project. One is the display style Rye— because of its inspiration being drawn from old American West wood-block posters, it brings up feelings of nostalgia. Often this sentiment suggests strong whiskey cocktails. Another is Raleway, which even by its name ties itself flawlessly to the Western style of Rye, it is web-readable, geometric, and elegant.
- [Google Fonts](https://fonts.google.com/)

## API

I chose the cocktailDB API for my app. There are several different data sets to access, and I added below a snippet from the "search by cocktail" data set.
```{
"drinks": [
{
	"idDrink": "11001",
	"strDrink": "Old Fashioned",
	"strDrinkAlternate": null,
	"strDrinkES": null,
	"strDrinkDE": null,
	"strDrinkFR": null,
	"strDrinkZH-HANS": null,
	"strDrinkZH-HANT": null,
	"strTags": "IBA,Classic,Alcoholic,Expensive",
	"strVideo": "https://www.youtube.com/watch?v=YsE_igrPXZs",
	"strCategory": "Cocktail",
	"strIBA": "Unforgettables",
	"strAlcoholic": "Alcoholic",
	"strGlass": "Old-fashioned glass",
	"strInstructions": "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.",
	"strInstructionsES": null,
	"strInstructionsDE": "Zuckerwürfel in ein old fashioned Glas geben und mit Bitterstoff sättigen, einen Schuss Wasser hinzufügen. Vermischen, bis sie sich auflösen.",
	"strInstructionsFR": null,
	"strInstructionsZH-HANS": null,
	"strInstructionsZH-HANT": null,
	"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
	"strIngredient1": "Bourbon",
	"strIngredient2": "Angostura bitters",
	"strIngredient3": "Sugar",
	"strIngredient4": "Water",
	"strIngredient5": null,
	"strIngredient6": null,
	"strIngredient7": null,
	"strIngredient8": null,
	"strIngredient9": null,
	"strIngredient10": null,
	"strIngredient11": null,
	"strIngredient12": null,
	"strIngredient13": null,
	"strIngredient14": null,
	"strIngredient15": null,
	"strMeasure1": "4.5 cL",
	"strMeasure2": "2 dashes",
	"strMeasure3": "1 cube",
	"strMeasure4": "dash",
	"strMeasure5": null,
	"strMeasure6": null,
	"strMeasure7": null,
	"strMeasure8": null,
	"strMeasure9": null,
	"strMeasure10": null,
	"strMeasure11": null,
	"strMeasure12": null,
	"strMeasure13": null,
	"strMeasure14": null,
	"strMeasure15": null,
	"strCreativeCommonsConfirmed": "Yes",
	"dateModified": "2016-11-04 09:46:42"
      }
   ]
}
```

## Wireframes and App Structure

### App Structure

- [React Architecture](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655163/Architecture_rzkfa2.png)

![React Architecture](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655163/Architecture_rzkfa2.png)

### Wireframes

 - [Mobile Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654749/Mobile_Wireframe_4_co8tja.png)

 ![Mobile Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654749/Mobile_Wireframe_4_co8tja.png)
 
 - [Tablet Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654746/Tablet_Wireframe_3_wzm3fg.png)

  ![Tablet Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654746/Tablet_Wireframe_3_wzm3fg.png)
 
 - [Desktop Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655536/Desktop_Wireframe_1_dkmxih.png)

 ![Desktop Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655536/Desktop_Wireframe_1_dkmxih.png)
 
 ## MVP/Post MVP
 ##### Unless otherwise noted, time is listed in hours.

 ### MVP
 
   * App
   * Fixed Nav Bar
   * About section blurb
   * Full Cocktail List
   * Cocktail Search Form
   * Cocktail Card
 
### Time Estimates

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| Overall Styles | h | 4hrs| 6 |
| Routing | h | 2hrs| 2 |
| Linking| h | 2hrs | 1.5 |
| Component Structure | h | 3hrs | 4 |
| Extra Dependency Installs | l | 1hr  | .5 |
| API Research | h | 3hrs | 3 |
| API call and render | 3h | 5hrs | 3 |
| Total | high | 18hrs | 20 |
    
 ### Post MVP
 
  * Favorite Cocktail List
  * CSS Animations
  * Drink ingredient serving size adjust
  * Image Carousel homepage

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Favorite Cocktail List Styling | h | 2hrs| n/a |
| Hover Animation | h | 3hrs| 1 |
| Incorporate Reactstrap | l | 3hr | 2 |
| Adjust Drink Serving Size | h | 6hrs| n/a |
| Total | high | 14hrs| 3 |
  
  ## Components 

  * Nav Bar
  * About Page
  * Cocktail List
  * Cocktail Card
  * Cocktail Form
  * Fave Cocktail List(postMVP)

  ### Time Estimates
  
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Nav Bar | h | 2hrs| 3 |
| About Page | h | 2hrs| 3 |
| Cocktail List | h | 4hrs| 2 |
| Cocktail Card | h | 3hrs| 4 |
| Cocktail Search Form | h | 3hrs| 3 |
| Favorite Cocktail List(post-mvp) | l | 3hrs| n/a |
| Implementing API | h | 5hrs| 4 |
| Total | high | 20hrs| 19 |

## Additional Libraries

 - [Sass](https://sass-lang.com/)
 - [ReactStrap](https://reactstrap.github.io/)

## Code Snippet

When I was writing the form and trying to get the data to render on submit, a big road block was checking whether or not that drink actually existed. This code snippet checks to see if the drink or letter entered is associated with an array, and if it is, it will map over the array and return the information. This was fun practice in reading and understanding documentation better.

```
const drinkList = () => {
	if (Array.isArray(drinkArr)) {
		return drinkArr.map((bev) => {
            return (...)
```
