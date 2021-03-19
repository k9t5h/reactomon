import React, { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonStore = ({ children }) => {
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  const catchPokemon = (pokemon) => {
    if (!catchedPokemons.includes(pokemon))
      setCatchedPokemons([...catchedPokemons, pokemon]);
  };

  return (
    <PokemonContext.Provider value={{ catchPokemon, catchedPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonStore, PokemonContext };
