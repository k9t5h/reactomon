import React, { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonStore = ({ children }) => {
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  const catchPokemon = (pokemon) =>
    setCatchedPokemons([...catchedPokemons, pokemon]);
  console.log(catchedPokemons);
  return (
    <PokemonContext.Provider value={{ catchPokemon, catchedPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonStore, PokemonContext };
