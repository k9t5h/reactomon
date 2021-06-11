<img alt="pokeball" align="left" src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/767?cb=20140520015336" width="50">

# Assignment: Reactomon

## Description
Create a basic frontend application in React using the [Pokemon API](https://pokeapi.co/).

## Tasks
You have to create a React application for Pokemon API. It should have 3 available routes for listing pokemons, listing types and a detailed view for specific Pokemons.

- create a **Navbar** component
    - it should contain Links to 2 routes: Pokemons and Types
- create a **PokemonList** component. It's a simple component for listing every item on this endpoint
    - it's available via the Pokemons link in the Navbar on ```http://localhost:3000/pokemons```
- create a **TypeList** component. It's a simple component for listing every item on this endpoint
    - it's available via the Types link in the Navbar on ```http://localhost:3000/types```
- create a **PokemonDetail** component. It's a detailed page about a Pokemon's attributes, for example [Bulbasaur](https://pokeapi.co/api/v2/pokemon/1/)
    - these Links are available on the Pokemons page. Every listed Pokemon item should be a Link pointing to detailed pages, like ```http://localhost:3000/pokemon/1```   
    - use your imagination!

## Requirements
✓ the above mentioned components (Navbar, PokemonList, etc.) are just the minimum requirements, your solution is better if you slice your big components into smaller ones  
✓ use **create-react-app**  
✓ use **axios** for fetching data  
✓ use **react-router-dom** for navigation  
