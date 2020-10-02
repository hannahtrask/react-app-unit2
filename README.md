# Cocktail App

## Project links

 - [Github project link]()
 - [Live project link]()

## Project Description

For my Unit 2 project, I'll be building an app where you can search cocktails by their ingredient. By clicking on a list of cocktails or searching in a form, you can pull up a card with the cocktail image, a short description, and a list of ingredients in each of the drinks. The idea is that there will be a place you can go to either peruse a list of cocktails or search for a specific cocktail. Some cocktails have different iterations, and each search will show every iteration of it's own cocktail on each card.

## Project Styling

The general theme of my App will be Old American West. I want the viewer to feel like they've teleported back in time to a saloon on the side of a railway, but in a classy way. Think Prohibition Era cocktail bar mixed with Wild West saloon.

I chose the below palette for this project. I want to represent the darker colors associated with the cool, dark lighting you often find in a cocktail bar. The dominating color scheme will be dark with some splashes of color here and there. The idea is to feel like you're in a trendy place while you look up trendy cocktails!
- [Color Palette](https://coolors.co/15181d-183642-575a60-9d4827-ce5f55-e3a767-ed9d48-ebe0d6)

I chose two typefaces for this project. One is the display style Rye— because of its inspiration being drawn from old American West wood-block posters, it brings up feelings of nostalgia. Often this sentiment suggests strong whiskey cocktails. Another is Raleway, which even by its name ties itself flawlessly to the Western style of Rye, it is web-readable, geometric, and elegant.
- [Google Fonts](https://fonts.google.com/)

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Open+Sans:wght@300;400;600&display=swap');
font-family: 'Abril Fatface', cursive;
font-family: 'Open Sans', sans-serif;

## API

I chose the cocktaiDB API for my app. There are several different data sets to access, and I added below a snippet from the "search by cocktail" data set.
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

Below is a link to the architecture of my app.
- [React Architecture](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655163/Architecture_rzkfa2.png)

### Wireframes

 - [Mobile Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654749/Mobile_Wireframe_4_co8tja.png)
 
 Tablet
 - [Tablet Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601654746/Tablet_Wireframe_3_wzm3fg.png)
 
 Desktop
 - [Desktop Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1601655536/Desktop_Wireframe_1_dkmxih.png)
 
 ## MVP/Post MVP
 
 ### MVP
 
   * App
   * Fixed Nav Bar
   * About section blurb
   * Full Cocktail List
   * Cocktail Search Form
   * Cocktail Card
 
### Other MVP

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Overall Styles | h | 4hrs| x | unknown |
| Routing | h | 2hrs| x | unknown |
| Linking| h | 2hrs| x | unknown |
| Extra Dependency Installs | l | 1hr | x | unknown |
| API Research | h | 5hrs| x | unknown |
| Total | high | 14hrs| x | unknown |
    
 ### Post MVP
 
  * Favorite Cocktail List
  * CSS Animations
  * Drink ingredient serving size adjust
  * Image Carousel homepage
  
| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Favorite Cocktail List Styling | h | 2hrs| x | unknown |
| Fill Effect Animation | h | 3hrs| x | unknown |
| Incorporate Bootstrap | l | 3hr | x | unknown |
| Adjust Drink Serving Size | h | 6hrs| x | unknown |
| Total | high | 14hrs| x | unknown |
  
  ## Components 
  
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Nav Bar | h | 2hrs| x | unknown |
| Cocktail List | h | 4hrs| x | unknown |
| Cocktail Card | h | 3hrs| x | unknown |
| Cocktail Search Form | h | 3hrs| x | unknown |
| Favorite Cocktail List(post-mvp) | l | 3hrs| x | unknown |
| Implementing API | h | 5hrs| x | unknown |
| Total | high | 20hrs| x | unknown |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

 - [Sass](https://sass-lang.com/)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
